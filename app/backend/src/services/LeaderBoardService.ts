import sequelize from '../database/models';
import getHomeQuery from './utils/index';

class LeaderBoardService {
  static async getHome() {
    const [homeLeaderBoard] = await sequelize.query(getHomeQuery);
    console.log(homeLeaderBoard);
    return homeLeaderBoard;
  }
}

export default LeaderBoardService;
