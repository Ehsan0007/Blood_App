import firebase from 'firebase';

var config = {
 
    apiKey: "AIzaSyBYS-YLsl2m0oXRE4FLuG90Wc8lFlEkGFE",
    authDomain: "prac-85f75.firebaseapp.com",
    databaseURL: "https://prac-85f75.firebaseio.com",
    projectId: "prac-85f75",
    storageBucket: "prac-85f75.appspot.com",
    messagingSenderId: "755450919682"
};

firebase.initializeApp(config);
export const database = firebase.database();

export const storage = firebase.storage();

export const fbAuth = firebase.auth();
