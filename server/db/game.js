import { dbRunPromise, dbFindId } from "./db";

export async function getAllGames() {
    let users = await dbRunPromise("SELECT * FROM games");
    return users;
}

export async function getGame(id) {
    const game = await dbFindId("games", id);
    return game;
}

export async function createGame(game) {
    let createdGames = await dbRunPromise("INSERT INTO games AS g(title, type) VALUES ($1, $2) RETURNING *", [
        game.title,
        game.type
    ]);
    return createdGames[0];
}
