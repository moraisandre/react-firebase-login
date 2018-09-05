import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import LoginPage from './components/LoginPage/LoginPage';
import { Grid, Row, Col } from 'react-bootstrap';
class App extends Component {

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