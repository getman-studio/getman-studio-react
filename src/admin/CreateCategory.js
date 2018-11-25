import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import {
    Typography, TextField, Button, Grid
} from '@material-ui/core';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 300,
    },
    button: {
        margin: theme.spacing.unit,
    },
});

class CreateCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
        };
    }

    render() {
        const { classes } = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="off">
                <Typography variant="h6" id="modal-title">
                    Створити категорію
                </Typography>

                <TextField
                    id="standard-name"
                    label="Назва"
                    className={classes.textField}
                    value={this.state.name}
                    onChange={this.handleChange}
                    margin="normal"
                />

                <Grid justify="flex-end" container direction="row" alignItems="center">
                    <Button className={classes.button}>Скасувати</Button>

                    <Button variant="contained" color="primary" component="span" className={classes.button}>
                        Створити
                    </Button>
                </Grid>
            </form>);
    }

    handleChange = (event) => {
        this.setState({
            name: event.target.value,
        });
    }
}

export default withStyles(styles)(CreateCategory);