import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDVphBSLVFg3a8il3B9_dP9x-U_wgZ04yI",
    authDomain: "bt3103-week-6-9d927.firebaseapp.com",
    projectId: "bt3103-week-6-9d927",
    storageBucket: "bt3103-week-6-9d927.appspot.com",
    messagingSenderId: "1046166298616",
    appId: "1:1046166298616:web:4027f1c991508076dfc00d",
    measurementId: "G-YLC17EVFQM"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;
