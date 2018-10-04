import { dbRunPromise } from "./db";

export async function getAllGames() {
    let users = await dbRunPromise("SELECT * FROM games");
    return users;
}

export async function createGame(game) {
    let status = await dbRunPromise("INSERT INTO games AS g(title, type) VALUES ($1, $2)", [game.title, game.type]);
    return status;
}
