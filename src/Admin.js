import React, { Component } from 'react';
import firebase from './firebase'

class Admin extends Component {

    constructor(props) {
        super(props);
        this.state = { categories: [] };
    }

    componentDidMount() {
        firebase.firestore()
            .collection("categories")
            .get()
            .then(function (snapshot) {
                console.log(snapshot);
            });
    }

    componentWillUnmount() {

    }

    render() {
        return <div>
            <p>Welcome to admin.</p>
        </div>
    }
}

export default Admin;