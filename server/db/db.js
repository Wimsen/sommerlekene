import pg from "pg";
import url from "url";
import config from "../config";

const dbParams = url.parse(config.db.url, true);
const auth = dbParams.auth ? dbParams.auth.split(":") : ["", ""];
const username = auth[0];
const dbName = dbParams.pathname.split("/")[1];

const dbConfig = {
    user: username,
    password: auth[1],
    host: dbParams.hostname,
    port: dbParams.port,
    database: dbName,
    ssl: true
};

const pool = new pg.Pool(dbConfig);

pool.on("error", (e, client) => {
    console.log("Something went wrong with the db connection");
});

async function executeAsyncQuery(query, params, client) {
    const queryRunner = client || pool;
    const result = await queryRunner.query(query, params);
    return result.rows;
}

export function dbRunPromise(...args) {
    return executeAsyncQuery(...args);
}

export function dbFindOne(table, paramObject, client) {
    const paramKey = Object.keys(paramObject)[0];
    return executeAsyncQuery(
        `SELECT * FROM ${table} WHERE LOWER(${paramKey}) = LOWER($1)`,
        [paramObject[paramKey]],
        client
    ).then(res => res[0]);
}

export function dbFindId(table, id, client) {
    return executeAsyncQuery(
        `SELECT * FROM ${table} WHERE id = $1`,
        [id],
        client
    ).then(res => res[0]);
}

export default pool;
