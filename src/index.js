import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBgv27BWNlVAINmzzQNIJZvQWngSynf4-o",
  authDomain: "react-firebase-login-19757.firebaseapp.com",
  databaseURL: "https://react-firebase-login-19757.firebaseio.com",
  projectId: "react-firebase-login-19757",
  storageBucket: "react-firebase-login-19757.appspot.com",
  messagingSenderId: "75747015336"
};

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
