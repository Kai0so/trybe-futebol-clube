import { Request, Response } from 'express';
import MatchService from '../services/MatchService';

class MatchController {
  constructor(private matchService = new MatchService()) { }

  public getAll = async (req: Request, res: Response) => {
    const result = await this.matchService.getAll();
    res.status(200).json(result);
  };
}
export default MatchController;
