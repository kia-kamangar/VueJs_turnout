
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBX7NOHTWnkqxGruaK-txgw87Z0EWvGOIg",
  authDomain: "turnout-fb07c.firebaseapp.com",
  databaseURL: "https://turnout-fb07c.firebaseio.com",
  projectId: "turnout-fb07c",
  storageBucket: "",
  messagingSenderId: "668081755053",
  appId: "1:668081755053:web:c7919b9ed0f265a0"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig)
export const eventsRef = firebaseApp.database().ref().child('events')