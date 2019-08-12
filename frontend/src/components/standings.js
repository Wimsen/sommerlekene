import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const styles = theme => ({
    root: {
        width: "100%",
        marginTop: theme.spacing(3),
        overflowX: "auto"
    }
});

class Standings extends Component {
    render() {
        const { classes } = this.props;

        let rows = [];
        if (this.props.standings) {
            rows = this.props.standings.sort((a, b) => {
                return b.points - a.points;
            });
        }

        return (
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Lag</TableCell>
                        <TableCell>Spilt</TableCell>
                        <TableCell>Poeng</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => {
                        return (
                            <TableRow key={row.team.id}>
                                <TableCell component="th" scope="row">
                                    {row.team.name}
                                </TableCell>
                                <TableCell>{row.played}</TableCell>
                                <TableCell>{row.points}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        );
    }
}

Standings.defaultProps = {
    standings: []
};

export default withStyles(styles)(Standings);
