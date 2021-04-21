import request from 'supertest';

import app from '../../src/app';

describe('contact', () => {
  describe('store', () => {
    it('should be able to create a contact', async () => {
      expect.assertions(2);

      const response = await request(app).post('/contact').send({
        name: 'jean',
        email: 'jean@email.com',
        phoneNumber: '53984599776',
        message: 'vamossssas',
      });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id');
    });
    it('should not be able to create a new contact when sending some invalid data', async () => {
      expect.assertions(1);

      await request(app).post('/contact').send({
        name: 'jean',
        email: 'jean@email.com',
        phoneNumber: '53984599776',
      });

      const response = await request(app).post('/contact').send({
        name: '',
        content: '',
      });

      expect(response.status).toBe(400);
    });
  });
  describe('show', () => {
    it('should not be able to show a contact when sending a string as id parameter', async () => {
      expect.assertions(1);

      const response = await request(app).get('/contact/vais');

      expect(response.status).toBe(404);
    });
  });
});
