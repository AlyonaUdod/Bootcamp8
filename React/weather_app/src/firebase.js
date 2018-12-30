import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

const config = {
    apiKey: "AIzaSyCa0HbSGN8WXG8JGKfrcqOoJOQIfydxVnE",
    authDomain: "weatherapp-3b0b2.firebaseapp.com",
    databaseURL: "https://weatherapp-3b0b2.firebaseio.com",
    projectId: "weatherapp-3b0b2",
    storageBucket: "weatherapp-3b0b2.appspot.com",
    messagingSenderId: "536294739195"
  };
  firebase.initializeApp(config);

export default firebase;