import React from "react";
import Grid from "@material-ui/core/Grid";

let User = props => (
    <Grid container spacing={24}>
        <Grid item>{props.username}</Grid>
    </Grid>
);
export default User;
