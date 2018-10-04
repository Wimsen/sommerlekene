import React, { Component } from "react";
import List from "@material-ui/core/List";
import Game from "./game";

const GameList = props => <List>{props.games.map(game => <Game key={game.id} {...game} />)}</List>;

export default GameList;
