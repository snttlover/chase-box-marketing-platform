import * as firebase from 'firebase/app'
import 'firebase/auth'
const app = firebase.initializeApp({
  apiKey: "AIzaSyB3vclBuXriYaYNgjJjlL7SX4YqCb0VH8o",
  authDomain: "notes-4a658.firebaseapp.com",
  databaseURL: "https://notes-4a658.firebaseio.com",
  projectId: "notes-4a658",
  storageBucket: "notes-4a658.appspot.com",
  messagingSenderId: "191229978687",
  appId: "1:191229978687:web:ffcced415393afce0bf08a"
});



export default app