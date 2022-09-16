import MatchModel from '../database/models/Match';
import TeamModel from '../database/models/Team';

class MatchService {
  public model: MatchModel;

  constructor() {
    this.model = new MatchModel();
  }

  public getAll = async () => {
    const matchesData = await MatchModel.findAll({
      include: [
        {
          model: TeamModel,
          attributes: { exclude: ['id'] },
          as: 'teamHome',
        },
        {
          model: TeamModel,
          attributes: { exclude: ['id'] },
          as: 'teamAway',
        },
      ],
    });
    return matchesData;
  };
}
export default MatchService;
