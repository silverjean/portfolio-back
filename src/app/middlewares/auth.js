/* eslint-disable consistent-return */
import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth';

export default async (request, response, next) => {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({
      message: 'Invalid token',
    });
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = await jwt.verify(token, authConfig.secret);
    request.userId = decoded.id;

    next();
  } catch (error) {
    return response.status(401).json({
      message: 'Invalid token',
    });
  }
};
