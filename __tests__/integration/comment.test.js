import request from 'supertest';

import app from '../../src/app';

describe('comment', () => {
  describe('store', () => {
    it('should be able to create a comment', async () => {
      expect.assertions(2);

      const response = await request(app).post('/comment').send({
        name: 'Jean',
        content: 'Otimo cv, logo as oportunidades vão aparecer!',
      });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id');
    });
    it('should not be able to create a new comment when sending some invalid data', async () => {
      expect.assertions(1);

      await request(app).post('/comment').send({
        name: 'Jeandasdwd',
        content: 'Otimo cv, logo as oportunidades vão apfarecer!asasa',
      });

      const response = await request(app).post('/comment').send({
        name: '',
        content: '',
      });

      expect(response.status).toBe(400);
    });
  });
  describe('show', () => {
    it('should not be able to show a comment when sending a string as id parameter', async () => {
      expect.assertions(1);

      const response = await request(app).get('/comment/vais');

      expect(response.status).toBe(404);
    });
  });
});
