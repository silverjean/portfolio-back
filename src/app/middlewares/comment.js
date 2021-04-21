/* eslint-disable radix */
import { Op } from 'sequelize';
import Comment from '../models/Comment';

function getPaginate(request, response, next) {
  const { name } = request.query;

  const where = {};

  if (name) {
    where.name = {
      [Op.like]: `%${name}%`,
    };
  }

  request.where = where;
  return next();
}

async function validateCommentExist(request, response, next) {
  const { id } = request.params;

  const comment = await Comment.findByPk(id);

  if (!comment) {
    return response.status(404).json({ message: 'Invalid dataaa' });
  }

  request.comment = comment;
  return next();
}

export { validateCommentExist, getPaginate };
