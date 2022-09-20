import { Router } from 'express';
import LearderBoardController from '../controllers/LeaderBoardController';

const router = Router();

// GET endpoints
router.get('/leaderboard/home', LearderBoardController.getHome);

export default router;
