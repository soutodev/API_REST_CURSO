import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Em uma aplicação real tais rotas/métodos não existem
// router.get('/', loginRequired, userController.index); // Lista todos os usuários
// router.get('/:id', userController.show); // Lista usuário

router.post('/', loginRequired, userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/*
index -> lista todos os usuários -> GET

store/create -> cria um novo usuário -> POST

delete -> apaga um usuário -> DELETE

show -> mostra um usuário -> GET

update -> atualiza um usuário -> PATCH ou PUT
*/
