import jwt from 'jsonwebtoken';
import User from '../models/User';
import authConfig from '../../config/auth';

class AuthController {
  async store(request, response) {
    const { user, password } = request.body;

    const admin = await User.findOne({
      where: { user },
    });

    if (!admin) {
      return response.status(401).json({
        message: 'Invalid data1',
      });
    }

    if (!(await admin.checkPassword(password))) {
      return response.status(401).json({
        message: 'Invalid data2',
      });
    }
    return response.json({
      message: 'Ok',
      token: jwt.sign({ id: admin.id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new AuthController();
