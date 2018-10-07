import { dbRunPromise, dbFindId } from "./db";

export async function getAllGames() {
    const users = await dbRunPromise("SELECT * FROM games");
    return users;
}

export async function getGame(id) {
    const game = await dbFindId("games", id);
    return game;
}

export async function createGame(game) {
    const createdGames = await dbRunPromise("INSERT INTO games AS g(title, type) VALUES ($1, $2) RETURNING *", [
        game.title,
        game.type
    ]);
    return createdGames[0];
}

export async function getStandings(gameId) {
    const query =
        "\
        SELECT played_table.id, played_table.name, COALESCE(points_table.points, 0) as points, played_table.played FROM ( \
             SELECT teams.name, teams.id, COUNT(seriesmatches.winner_id) AS points \
             FROM seriesmatches JOIN games ON seriesmatches.game_id = games.id \
             JOIN teams ON seriesmatches.winner_id = teams.id \
             WHERE seriesmatches.game_id = $1 \
             GROUP BY teams.name, teams.id \
         ) AS points_table \
        RIGHT OUTER JOIN ( \
             SELECT teams.id, teams.name, COUNT(seriesmatches.winner_id) AS played FROM seriesmatches \
             JOIN teams ON seriesmatches.team1_id = teams.id OR seriesmatches.team2_id = teams.id \
             WHERE seriesmatches.game_id = $1 \
             GROUP BY teams.id \
         ) AS played_table \
        ON points_table.id = played_table.id";

    const gameStandings = await dbRunPromise(query, [gameId]);
    return gameStandings;
}
