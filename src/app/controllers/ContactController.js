import Contact from '../models/Contact';

class ContactController {
  async index(request, response) {
    try {
      const { where } = request;

      const contact = await Contact.findAll({
        where,
      });

      return response.json(contact);
    } catch (error) {
      return response.status(error.status || 400).json(error.message);
    }
  }

  show(request, response) {
    try {
      const { contact } = request;

      return response.json(contact);
    } catch (error) {
      return response.status(error.status || 400).json(error.message);
    }
  }

  async store(request, response) {
    const { name, email, phoneNumber, message } = request.body;
    try {
      if (!name || !email || !phoneNumber || !message) {
        return response.status(400).json({
          message: 'Invalid data',
        });
      }

      const contact = await Contact.create({
        name,
        email,
        phone_number: phoneNumber,
        message,
      });

      return response.json(contact);
    } catch (error) {
      return response.status(error.status || 400).json(error.message);
    }
  }

  async delete(request, response) {
    try {
      const { contact } = request;

      await contact.destroy();

      return response.sendStatus(204);
    } catch (error) {
      return response.status(error.status || 400).json(error.message);
    }
  }
}

export default new ContactController();
