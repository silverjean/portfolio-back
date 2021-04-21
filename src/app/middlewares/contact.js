/* eslint-disable radix */
import Contact from '../models/Contact';

function getPaginate(request, response, next) {
  const { name, email, phoneNumber, message } = request.query;

  const where = {};

  if (name) {
    where.name = name;
  }

  if (email) {
    where.email = email;
  }

  if (phoneNumber) {
    where.phoneNumber = phoneNumber;
  }

  if (message) {
    where.message = message;
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
