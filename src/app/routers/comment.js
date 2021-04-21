import { Router } from 'express';

import CommentController from '../controllers/CommentController';
import authMiddleware from '../middlewares/auth';
import { getPaginate, validateCommentExist } from '../middlewares/comment';

const routes = new Router();

routes.get('/comment', authMiddleware, getPaginate, CommentController.index);
// #swagger.tags = ['Comment']
// #swagger.description = 'Endpoint para listar os comentário'
routes.post('/comment', CommentController.store);
// #swagger.tags = ['Comment']
// #swagger.description = 'Endpoint para criar um comentário.'

/* #swagger.parameters['newComment'] = {
               in: 'body',
               description: 'Informações do Comentário.',
               required: true,
               type: 'object',
               schema: { $ref: "#/definitions/AddComment" }
        } */
routes.delete(
  '/comment/:id',
  authMiddleware,
  validateCommentExist,
  CommentController.delete
);
// #swagger.tags = ['Contact']
// #swagger.description = 'Endpoint para deletar um comentário.'
// #swagger.parameters['id'] = { description: 'ID do contato' }

export default routes;
