import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import LoginPage from './components/LoginPage/LoginPage'
import { Grid,Row,Col } from 'react-bootstrap';
class App extends Component {

  constructor() {
    super();
    this.state = {
      speed: 10
    }
  }

  componentDidMount() {
    const rootRef = firebase.database().ref().child('react');
    const speedRef = rootRef.child('speed');
    
    speedRef.on('value', snap => {
      console.log(snap.val());
      this.setState({
        speed: snap.val()
      });
    });
  }


  render() {
    return (
      <div className="App">
        <Grid>
          <Row>
            <Col xs={12} sm={4} smOffset={4} md={4} mdOffset={4}>
              <LoginPage />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;