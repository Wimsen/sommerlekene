DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users (
    id serial PRIMARY KEY,
    created timestamp without time zone DEFAULT now(),
    username varchar(255) UNIQUE NOT NULL
);
