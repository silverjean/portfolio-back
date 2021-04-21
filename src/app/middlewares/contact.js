/* eslint-disable radix */
import { Op } from 'sequelize';
import Contact from '../models/Contact';

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

async function validateContactExist(request, response, next) {
  const { id } = request.params;

  const contact = await Contact.findByPk(id);

  if (!contact) {
    return response.status(404).json({ message: 'Invalid dataaa' });
  }

  request.contact = contact;
  return next();
}

export { validateContactExist, getPaginate };
