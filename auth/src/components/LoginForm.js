// LoginForm - houses everything to do with email, password and signing inspect

import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Button, Card, CardSection } from './common';

class LoginForm extends Component {
  // Initialise State to LoginForm
  state = { text: '' };


  render() {
    return (
      <Card>
        <CardSection>
          // onChangeText callback
          // TextInput has no idea what its value is.
          // It only finds out after onChangeText is called
          // Text input is held in the state, we ALWAYS know the State
          // Useful for validation, and using that state which is available
          <TextInput
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
            style={{ height: 20, width: 100 }}
          />
        </CardSection>
        <CardSection>
          <TextInput />
        </CardSection>
        <CardSection>
          <Button>
            Log In
          </Button>
        </CardSection>
      </Card>
    );
  }
}

// const styles = {
//
// }

export default LoginForm
