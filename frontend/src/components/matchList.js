import React from "react";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import Match from "./match";

const MatchList = props => {
    return (
        <List>
            <ListSubheader>Kommende kamper</ListSubheader>
            {props.upcomingMatches.map(match => <Match key={match.id} {...match} />)}
            <ListSubheader>Spilte kamper</ListSubheader>
            {props.playedMatches.map(match => <Match key={match.id} {...match} />)}
        </List>
    );
};

export default MatchList;
