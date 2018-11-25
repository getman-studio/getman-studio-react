import React, { Component } from 'react';
import firebase from '../firebase'

import { withStyles } from '@material-ui/core/styles';
import {
    Typography, TextField, Button, Grid, CircularProgress
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
    progress: {
        margin: theme.spacing.unit * 2,
    },
});

class CreateCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            loading: false,
            error: null
        };
    }

    render() {
        const { classes } = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="off">
                <Typography variant="h6" id="modal-title">
                    Створити категорію
                </Typography>

                <Grid container direction="row" alignItems="center">
                    <TextField
                        id="standard-name"
                        label="Назва"
                        className={classes.textField}
                        value={this.state.name}
                        onChange={this.handleChange}
                        margin="normal"
                        error={this.state.error != null}
                    />

                    {this.state.loading &&
                        <CircularProgress className={classes.progress} size={28} />
                    }

                </Grid>

                <Grid justify="flex-end" container direction="row" alignItems="center">
                    <Button className={classes.button} onClick={this.props.onCancel}>Скасувати</Button>

                    <Button variant="contained" color="primary" component="span" className={classes.button} onClick={this.createCategory}>
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

    createCategory = () => {
        this.setState({
            loading: true,
            error: null
        })

        if (this.state.name != "") {
            firebase.firestore()
                .collection("categories")
                .doc().set({
                    name: this.state.name
                })
                .then(data => {
                    console.log(data);
                    this.props.onSuccess();
                    this.setState({
                        error: null,
                        loading: false,
                    })
                })
                .catch(e => {
                    this.setState({
                        loading: false,
                        error: e,
                    })
                });
        }
    }
}

export default withStyles(styles)(CreateCategory);