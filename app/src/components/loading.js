import React from "react";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

const Loading = props => (
    <React.Fragment>
        {props.loading ? (
            <Grid container justify="center">
                <CircularProgress />
            </Grid>
        ) : (
            props.children
        )}
    </React.Fragment>
);

export default Loading;
