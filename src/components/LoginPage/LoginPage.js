import React, { Component } from 'react';
import { Panel, Form, FormGroup, FormControl, Button } from 'react-bootstrap';

class LoginPage extends Component {
  handleFormSubmit(e) {
    e.preventDefault();

    console.log("Button clicked");
  }

  render() {
    return (
      <div>
        <Panel>
          <Panel.Body>
            <Form>
              <FormGroup>
                <FormControl type="email" label="E-mail" placeholder="User" />
              </FormGroup>
              <FormGroup controlId="formPassword">
                <FormControl
                  type="password"
                  label="Password"
                  placeholder="Password"
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
      </div>
    );
  }
}

export default LoginPage;
