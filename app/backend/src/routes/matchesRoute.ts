import { Router } from 'express';
import MatchController from '../controllers/MatchController';

const router = Router();
const matchController = new MatchController();

// GET endpoints
router.get('/matches', matchController.getAll);

export default router;
