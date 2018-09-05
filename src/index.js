import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
import HomePage from './components/HomePage/HomePage';
import NotFound from './components/NotFound/NotFound';

var config = {
  apiKey: 'AIzaSyBgv27BWNlVAINmzzQNIJZvQWngSynf4-o',
  authDomain: 'react-firebase-login-19757.firebaseapp.com',
  databaseURL: 'https://react-firebase-login-19757.firebaseio.com',
  projectId: 'react-firebase-login-19757',
  storageBucket: 'react-firebase-login-19757.appspot.com',
  messagingSenderId: '75747015336'
};

firebase.initializeApp(config);

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/home" component={HomePage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
