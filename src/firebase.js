import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyB1wdfKYTzkoZMscD0ce5Yn89K8UqnjY2E",
    authDomain: "getman-studio.firebaseapp.com",
    databaseURL: "https://getman-studio.firebaseio.com",
    projectId: "getman-studio",
    storageBucket: "getman-studio.appspot.com",
    messagingSenderId: "513922996090"
};
firebase.initializeApp(config);

export default firebase;