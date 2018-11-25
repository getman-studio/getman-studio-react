import React, { Component } from 'react';
import firebase from '../firebase'

import CreateCategory from './CreateCategory'

import AddIcon from '@material-ui/icons/Add';

import { withStyles } from '@material-ui/core/styles';
import {
    Typography, Card, CardActionArea, CardContent,
    Modal, Grid, List, ListItem, ListItemText, ListItemIcon
} from '@material-ui/core';

const styles = theme => ({
    modal: {
        position: 'absolute',
        top: "25%",
        left: "30%",
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    }
})

class Admin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            isCategoryCreating: false,
            isItemCreating: false,
        };
    }

    componentDidMount() {
        firebase.firestore()
            .collection("categories")
            .get()
            .then((snapshot) => {
                this.setState({
                    categories: snapshot.docs.map(item => {
                        return {
                            name: item.name
                        };
                    })
                });
            });
    }

    componentWillUnmount() {

    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Grid container>
                    <Grid item>
                        <List component="nav">
                            <ListItem
                                button
                                onClick={this.openNewCategoryModal}>
                                <ListItemIcon>
                                    <AddIcon />
                                </ListItemIcon>
                                <ListItemText primary="додати категорію" />
                            </ListItem>
                            {this.state.categories.map(_ => (
                                <ListItem
                                    button
                                    onClick={event => console.log(event)}>
                                    <ListItemText primary="text" />
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                    <Grid item>
                        <Typography component="h2" variant="h2" gutterBottom>
                            Text
                    </Typography>

                        <Card>
                            <CardActionArea onClick={this.openNewCategoryItemModal}>
                                <CardContent style={{ display: "flex", flexDirection: "column", alignItems: 'center', }}>
                                    <AddIcon />
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Додати елемент
                            </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.isCategoryCreating}
                    onClose={this.handleClose}>

                    <div class={classes.modal}>
                        <CreateCategory />
                    </div>
                </Modal>
            </div>
        );
    }

    openNewCategoryModal = () => {
        this.setState({
            isItemCreating: false,
            isCategoryCreating: true,
        });
    }


    openNewCategoryItemModal = () => {
        this.setState({
            isItemCreating: true,
            isCategoryCreating: false,
        });
    }
}

export default withStyles(styles)(Admin);