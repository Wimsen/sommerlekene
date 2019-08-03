import React, { Component } from "react";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";

import Loading from "./loading";

const GAME_TYPES = Object.freeze({ series: "Serie", playoff: "Utslag" });

class RegisterGameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            type: ""
        };
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    };

    onSubmit = async e => {
        e.preventDefault();
        await this.props.onSubmit(this.state);
        this.props.onClose();
    };

    render() {
        return (
            <form onSubmit={this.onSubmit} noValidate autoComplete="off">
                <Grid container justify="center">
                    <Typography variant="display1">Registrer lek</Typography>
                </Grid>

                <TextField
                    id="standard-name"
                    label="Title"
                    value={this.state.title}
                    onChange={this.handleChange("title")}
                    margin="normal"
                />

                <FormControl>
                    <RadioGroup
                        aria-label="type"
                        name="type"
                        value={this.state.type}
                        onChange={this.handleChange("type")}
                        required
                    >
                        <FormControlLabel
                            value={GAME_TYPES.series}
                            control={<Radio color="primary" />}
                            label={GAME_TYPES.series}
                            labelPlacement="start"
                        />
                        <FormControlLabel
                            value={GAME_TYPES.playoff}
                            control={<Radio color="primary" />}
                            label={GAME_TYPES.playoff}
                            labelPlacement="start"
                        />
                    </RadioGroup>
                </FormControl>

                <Grid container justify="center">
                    <Loading loading={this.props.createGameLoading}>
                        <Button type="submit" variant="contained" color="primary">
                            Registrer
                        </Button>
                    </Loading>
                </Grid>
            </form>
        );
    }
}

export default RegisterGameForm;
