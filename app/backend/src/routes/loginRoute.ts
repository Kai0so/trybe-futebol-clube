import { Router } from 'express';
import UserController from '../controllers/UserController';
import { loginValidation, tokenValidation } from '../middlewares/index';

const router = Router();
const userControler = new UserController();

// GET endpoints
router.get('/login/validate', tokenValidation);
// POST endpoints
router.post('/login', loginValidation, userControler.login);

export default router;
