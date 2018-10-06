import { dbRunPromise } from "./db";

export async function getAllTeams() {
    let teams = await dbRunPromise("SELECT * FROM teams");
    teams.sort((team1, team2) => {
        return team1.id - team2.id;
    });
    return teams;
}
