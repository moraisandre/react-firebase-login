import React, { Component } from 'react';
import {
  Panel,
  Form,
  FormGroup,
  FormControl,
  Button,
  Alert,
  Grid,
  Row,
  Col
} from 'react-bootstrap';
import { withRouter } from 'react-router'
import * as firebase from 'firebase';
import HomePage from '../HomePage/HomePage'

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      pass: '',
      loginErro: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();

    // console.log(withRouter(HomePage));

    // const ShowTheLocationWithRouter = withRouter(HomePage)

    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.pass)
      .then(() => {
        this.setState({ loginErro: 'Sucess!' });
      })
      .catch(e => {
        this.setState({ loginErro: e.message });
      });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} sm={4} smOffset={4} md={4} mdOffset={4}>
            <Panel>
              <Panel.Body>
                <Form>
                  <Alert
                    bsStyle={
                      this.state.loginErro === 'Sucess!' ? 'info' : 'danger'
                    }
                    hidden={this.state.loginErro === ''}
                  >
                    {this.state.loginErro !== 'Sucess!' ? (
                      <strong>Opss!</strong>
                    ) : (
                      ''
                    )}
                    {this.state.loginErro}
                  </Alert>
                  <FormGroup>
                    <FormControl
                      type="email"
                      name="email"
                      label="Email"
                      placeholder="Email"
                      value={this.state.email}
                      onChange={this.handleInputChange}
                    />
                  </FormGroup>
                  <FormGroup controlId="formPassword">
                    <FormControl
                      type="password"
                      name="pass"
                      label="Password"
                      value={this.state.pass}
                      placeholder="Password"
                      onChange={this.handleInputChange}
                    />
                  </FormGroup>
                  <FormGroup controlId="formSubmit">
                    <Button
                      bsStyle="primary"
                      type="submit"
                      onClick={this.handleFormSubmit}
                    >
                      Login
                    </Button>
                  </FormGroup>
                </Form>
              </Panel.Body>
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default LoginPage;
