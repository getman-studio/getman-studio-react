import React, { Component } from 'react';
import firebase from '../firebase'

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AddIcon from '@material-ui/icons/Add';

import { Typography, Card, CardActionArea, CardContent } from '@material-ui/core';


class Admin extends Component {

    constructor(props) {
        super(props);
        this.state = { categories: [] };
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
        return (
            <Grid container>
                <Grid item>
                    <List component="nav">
                        <ListItem
                            button
                            onClick={event => console.log(event)}>
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
                        <CardActionArea>
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
        );
    }
}

export default Admin;