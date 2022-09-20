import { Request, Response } from 'express';
import LeaderBoardService from '../services/LeaderBoardService';

class LeaderBoardController {
  static async getHome(req: Request, res: Response) {
    const result = await LeaderBoardService.getHome();
    res.status(200).json(result);
  }
}

export default LeaderBoardController;
