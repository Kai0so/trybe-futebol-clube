import { Request, Response } from 'express';
import LoginService from '../services/UserService';

class UserController {
  constructor(private loginService = new LoginService()) { }

  public login = async (req: Request, res: Response) => {
    try {
      const result = await this.loginService.login(req.body);
      res.status(200).json(result);
    } catch (error) {
      res.status(401).json({ message: 'Incorrect email or password' });
    }
  };
}
export default UserController;
