import { dbRunPromise, dbFindId } from "./db";

export async function createMatchesForGame(game, matches) {
    if (game.type == "Serie") {
        await Promise.all(
            matches.map(async match => {
                const result = await dbRunPromise(
                    "INSERT INTO seriesmatches AS m (game_id, team1_id, team2_id) VALUES ($1, $2, $3)",
                    [match.game_id, match.team1_id, match.team2_id]
                );
            })
        );
        return { success: "true" };
    }
}

export async function getMatchesByGame(game) {
    if (game.type == "Serie") {
        const query =
            "SELECT * FROM \
                (SELECT id, created, game_id, team1_id, team2_id, winner_id FROM seriesmatches) AS matches \
                JOIN (SELECT id AS team1_id, name AS team1_name FROM teams) AS teams1 ON matches.team1_id = teams1.team1_id \
                JOIN (SELECT id AS team2_id, name AS team2_name FROM teams) AS teams2 ON matches.team2_id = teams2.team2_id \
                WHERE matches.game_id = $1";
        const matches = await dbRunPromise(query, [game.id]);
        return matches;
    }
}

export async function getMatchByGameAndId(game, matchId) {
    if (game.type == "Serie") {
        const query =
            "SELECT * FROM seriesmatches \
            JOIN (SELECT id AS game_id, type AS game_type, title AS game_title FROM games) AS games ON seriesmatches.game_id = games.game_id \
            JOIN (SELECT id AS team1_id, name AS team1_name FROM teams) AS teams1 ON seriesmatches.team1_id = teams1.team1_id \
            JOIN (SELECT id AS team2_id, name AS team2_name FROM teams) AS teams2 ON seriesmatches.team2_id = teams2.team2_id \
            WHERE seriesmatches.game_id = $1 AND seriesmatches.id = $2";
        const selectedMatch = await dbRunPromise(query, [game.id, matchId]);
        return selectedMatch[0];
    }
}

export async function setWinnerByTypeAndId(type, matchId, winnerId) {
    if (type == "Serie") {
        await dbRunPromise("UPDATE seriesmatches SET winner_id = $1 WHERE id = $2", [winnerId, matchId]);
        return { success: true };
    }
}
