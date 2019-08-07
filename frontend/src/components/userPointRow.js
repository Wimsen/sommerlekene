import React from "react";

import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";

const UserPointRow = props => {
    return (
        <ListItem divider>
            <Typography variant="body1">{props.username}</Typography>
        </ListItem>
    );
};

export default UserPointRow;
