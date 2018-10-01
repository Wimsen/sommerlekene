import { dbRunPromise, dbFindId, dbFindOne } from "./db";

export async function getAllUsers() {
    let users = await dbRunPromise("SELECT * FROM users");
    return users;
}

export async function createUser(user) {
    let status = await dbRunPromise("INSERT INTO users AS u(username) VALUES ($1)", [user.username]);
    return status;
}
