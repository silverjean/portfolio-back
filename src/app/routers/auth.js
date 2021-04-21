import { Router } from 'express';

import AuthController from '../controllers/AuthController';

const routes = new Router();

routes.post('/auth', AuthController.store);
// #swagger.tags = ['Auth']
// #swagger.description = 'Endpoint para efetuar o login.'
export default routes;
