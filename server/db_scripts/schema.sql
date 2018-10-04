DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS games;

CREATE TABLE IF NOT EXISTS users (
    id serial PRIMARY KEY,
    created timestamp without time zone DEFAULT now(),
    username varchar(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS games (
    id serial PRIMARY KEY,
    created timestamp without time zone DEFAULT now(),
    title varchar(255) NOT NULL,
    type varchar(255) NOT NULL
);
