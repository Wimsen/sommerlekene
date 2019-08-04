DROP TABLE IF EXISTS user_game_point;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS seriesmatches;
DROP TABLE IF EXISTS playoffmatches;
DROP TABLE IF EXISTS matches;
DROP TABLE IF EXISTS teams;
DROP TABLE IF EXISTS games;

CREATE TABLE IF NOT EXISTS teams (
    id serial PRIMARY KEY,
    created timestamp without time zone DEFAULT now(),
    name varchar(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS games (
    id serial PRIMARY KEY,
    created timestamp without time zone DEFAULT now(),
    title varchar(255) NOT NULL,
    type varchar(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS users (
    id serial PRIMARY KEY,
    created timestamp without time zone DEFAULT now(),
    username varchar(255) NOT NULL,
    team_id integer,
    FOREIGN KEY(team_id) REFERENCES teams(id)
);

CREATE TABLE IF NOT EXISTS user_game_point (
    id serial PRIMARY KEY,
    created timestamp without time zone DEFAULT now(),
    points integer,
    game_id integer,
    user_id integer,
    FOREIGN KEY(game_id) REFERENCES games(id),
    FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS matches (
    id serial PRIMARY KEY,
    created timestamp without time zone DEFAULT now(),
    game_id integer,
    team1_id integer NOT NULL,
    team2_id integer NOT NULL,
    winner_id integer,
    stage integer,
    FOREIGN KEY(game_id) REFERENCES games(id),
    FOREIGN KEY(team1_id) REFERENCES teams(id),
    FOREIGN KEY(team2_id) REFERENCES teams(id),
    FOREIGN KEY(winner_id) REFERENCES teams(id)
);

INSERT INTO teams AS t(name) values ('Lag 1');
INSERT INTO teams AS t(name) values ('Lag 2');
INSERT INTO teams AS t(name) values ('Lag 3');
INSERT INTO teams AS t(name) values ('Lag 4');

INSERT INTO users AS u(username, team_id) VALUES ('Spiller 1 Lag 1', 1);
INSERT INTO users AS u(username, team_id) VALUES ('Spiller 2 Lag 1', 1);
INSERT INTO users AS u(username, team_id) VALUES ('Spiller 3 Lag 1', 1);
INSERT INTO users AS u(username, team_id) VALUES ('Spiller 4 Lag 1', 1);

INSERT INTO users AS u(username, team_id) VALUES ('Spiller 1 Lag 2', 2);
INSERT INTO users AS u(username, team_id) VALUES ('Spiller 2 Lag 2', 2);
INSERT INTO users AS u(username, team_id) VALUES ('Spiller 3 Lag 2', 2);
INSERT INTO users AS u(username, team_id) VALUES ('Spiller 4 Lag 2', 2);

INSERT INTO users AS u(username, team_id) VALUES ('Spiller 1 Lag 3', 3);
INSERT INTO users AS u(username, team_id) VALUES ('Spiller 2 Lag 3', 3);
INSERT INTO users AS u(username, team_id) VALUES ('Spiller 3 Lag 3', 3);
INSERT INTO users AS u(username, team_id) VALUES ('Spiller 4 Lag 3', 3);

INSERT INTO users AS u(username, team_id) VALUES ('Spiller 1 Lag 4', 4);
INSERT INTO users AS u(username, team_id) VALUES ('Spiller 2 Lag 4', 4);
INSERT INTO users AS u(username, team_id) VALUES ('Spiller 3 Lag 4', 4);
INSERT INTO users AS u(username, team_id) VALUES ('Spiller 4 Lag 4', 4);
