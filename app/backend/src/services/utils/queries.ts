export const getHomeQuery = `SELECT 
t.team_name AS 'name', 
COUNT(
  CASE WHEN m.home_team_goals = m.away_team_goals 
  AND m.in_progress = 0 THEN 1 ELSE NULL END
) * 1 + COUNT(
  CASE WHEN m.home_team_goals > m.away_team_goals 
  AND m.in_progress = 0 THEN 1 ELSE NULL END
) * 3 AS totalPoints, 
COUNT(
  CASE WHEN m.in_progress = 0 THEN 1 ELSE NULL END
) AS totalGames, 
COUNT(
  CASE WHEN m.home_team_goals > m.away_team_goals 
  AND m.in_progress = 0 THEN 1 ELSE NULL END
) AS totalVictories, 
COUNT(
  CASE WHEN m.home_team_goals = m.away_team_goals 
  AND m.in_progress = 0 THEN 1 ELSE NULL END
) AS totalDraws, 
COUNT(
  CASE WHEN m.home_team_goals < m.away_team_goals 
  AND m.in_progress = 0 THEN 1 ELSE NULL END
) AS totalLosses, 
CONVERT(
  SUM(m.home_team_goals), 
  SIGNED
) AS goalsFavor, 
CONVERT(
  SUM(m.away_team_goals), 
  SIGNED
) AS goalsOwn, 
CONVERT(
  SUM(m.home_team_goals) - SUM(m.away_team_goals), 
  SIGNED
) AS goalsBalance, 
ROUND(
  (
    COUNT(
      CASE WHEN m.home_team_goals = m.away_team_goals 
      AND m.in_progress = 0 THEN 1 ELSE NULL END
    ) * 1 + COUNT(
      CASE WHEN m.home_team_goals > m.away_team_goals 
      AND m.in_progress = 0 THEN 1 ELSE NULL END
    ) * 3
  ) / (
    COUNT(m.home_team) * 3
  ) * 100, 
  2
) AS efficiency 
FROM 
TRYBE_FUTEBOL_CLUBE.matches AS m 
JOIN TRYBE_FUTEBOL_CLUBE.teams AS t ON t.id = m.home_team 
WHERE 
m.in_progress = 0 
GROUP BY 
t.team_name 
ORDER BY 
totalPoints DESC, 
totalVictories DESC, 
goalsBalance DESC, 
goalsFavor DESC, 
goalsOwn DESC;`;

export const getAwayQuery = `SELECT 
t.team_name AS 'name', 
COUNT(
  CASE WHEN m.home_team_goals = m.away_team_goals 
  AND m.in_progress = 0 THEN 1 ELSE NULL END
) * 1 + COUNT(
  CASE WHEN m.home_team_goals < m.away_team_goals 
  AND m.in_progress = 0 THEN 1 ELSE NULL END
) * 3 AS totalPoints, 
COUNT(
  CASE WHEN m.in_progress = 0 THEN 1 ELSE NULL END
) AS totalGames, 
COUNT(
  CASE WHEN m.home_team_goals < m.away_team_goals 
  AND m.in_progress = 0 THEN 1 ELSE NULL END
) AS totalVictories, 
COUNT(
  CASE WHEN m.home_team_goals = m.away_team_goals 
  AND m.in_progress = 0 THEN 1 ELSE NULL END
) AS totalDraws, 
COUNT(
  CASE WHEN m.home_team_goals > m.away_team_goals 
  AND m.in_progress = 0 THEN 1 ELSE NULL END
) AS totalLosses, 
CONVERT(
  SUM(m.away_team_goals), 
  SIGNED
) AS goalsFavor, 
CONVERT(
  SUM(m.home_team_goals), 
  SIGNED
) AS goalsOwn, 
CONVERT(
  SUM(m.away_team_goals) - SUM(m.home_team_goals), 
  SIGNED
) AS goalsBalance, 
ROUND(
  (
    COUNT(
      CASE WHEN m.home_team_goals = m.away_team_goals 
      AND m.in_progress = 0 THEN 1 ELSE NULL END
    ) * 1 + COUNT(
      CASE WHEN m.home_team_goals < m.away_team_goals 
      AND m.in_progress = 0 THEN 1 ELSE NULL END
    ) * 3
  ) / (
    COUNT(m.away_team) * 3
  ) * 100, 
  2
) AS efficiency 
FROM 
TRYBE_FUTEBOL_CLUBE.matches AS m 
JOIN TRYBE_FUTEBOL_CLUBE.teams AS t ON t.id = m.away_team 
WHERE 
m.in_progress = 0 
GROUP BY 
t.team_name 
ORDER BY 
totalPoints DESC, 
totalVictories DESC, 
goalsBalance DESC, 
goalsFavor DESC, 
goalsOwn DESC;`;
