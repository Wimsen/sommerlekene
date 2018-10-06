import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import Match from "./match";

const MatchList = props => {
    const upcomingMatches = props.matches.filter(match => {
        return match.winner_id == undefined;
    });

    const finishedMatches = props.matches.filter(match => {
        return match.winner_id != undefined;
    });

    return (
        <List>
            <ListSubheader>Kommende kamper</ListSubheader>
            {upcomingMatches.map(match => <Match key={match.id} {...match} />)}
            <ListSubheader>Spilte kamper</ListSubheader>
            {finishedMatches.map(match => <Match key={match.id} {...match} />)}
        </List>
    );
};

export default MatchList;
