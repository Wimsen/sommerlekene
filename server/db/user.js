import { dbRunPromise, dbFindId, dbFindOne } from "./db";

export async function getAllUsers() {
    let users = await dbRunPromise("SELECT * FROM users");
    return users;
}
