import { Router } from 'express';

import ContactController from '../controllers/ContactController';
import authMiddleware from '../middlewares/auth';
import { getPaginate, validateContactExist } from '../middlewares/contact';

const routes = new Router();

routes.get('/contact', getPaginate, authMiddleware, ContactController.index);
// #swagger.tags = ['Contact']
// #swagger.description = 'Endpoint para listar os contatos.'
routes.get(
  '/contact/:id',
  validateContactExist,
  authMiddleware,
  ContactController.show
);
// #swagger.tags = ['Contact']
// #swagger.description = 'Endpoint para obter um contato.'
// #swagger.parameters['id'] = { description: 'ID do contato' }

routes.post('/contact', ContactController.store);
// #swagger.tags = ['Contact']
// #swagger.description = 'Endpoint para criar um contato.'

/* #swagger.parameters['newContact'] = {
               in: 'body',
               description: 'Informações do contato.',
               required: true,
               type: 'object',
               schema: { $ref: "#/definitions/AddContact" }
        } */

routes.delete(
  '/contact/:id',
  validateContactExist,
  authMiddleware,
  ContactController.delete
);

export default routes;
