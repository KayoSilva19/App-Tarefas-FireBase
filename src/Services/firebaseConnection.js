import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyD8MAmnM70MmeaIkZMsOVbLUrCYt_5Q9-4",
    authDomain: "tarefas-43b29.firebaseapp.com",
    projectId: "tarefas-43b29",
    storageBucket: "tarefas-43b29.appspot.com",
    messagingSenderId: "731761728293",
    appId: "1:731761728293:web:7195c0c9367e6ce4a298cc"
  };

  if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig)
  }

  export default firebase;