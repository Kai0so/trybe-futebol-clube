import sequelize from '../database/models';
import { getHomeQuery, getAwayQuery } from './utils/index';

class LeaderBoardService {
  static async getHome() {
    const [homeLeaderBoard] = await sequelize.query(getHomeQuery);
    return homeLeaderBoard;
  }

  static async getAway() {
    const [awayLeaderBoard] = await sequelize.query(getAwayQuery);
    return awayLeaderBoard;
  }
}

export default LeaderBoardService;
