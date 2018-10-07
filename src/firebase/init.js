import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyAGJyqrUugsMZvGxEtrsfpx4TLz31D8Kuk",
    authDomain: "geo-ninjas-2e8ad.firebaseapp.com",
    databaseURL: "https://geo-ninjas-2e8ad.firebaseio.com",
    projectId: "geo-ninjas-2e8ad",
    storageBucket: "",
    messagingSenderId: "562558169963"
  };
  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({timestampsInSnapshots:true})

export default firebaseApp.firestore()