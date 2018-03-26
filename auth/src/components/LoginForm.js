// LoginForm - houses everything to do with email, password and signing inspect

import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  // Initialise State to LoginForm
  state = {
    email: '',
    password: '',
    error: '',
    loading: false,
  };


  // callback to authenticate user using firebase
  onButtonPress() {
    const { email, password } = this.state;

    // set error and loading state
    this.setState({ error: '', loading: true });

    // attempt sign in, then sign up, catch errors, update state
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false
    });
  }

  onLoginFail() {
    this.setState({ error: 'Authentication Failed.', loading: false });
  }

  renderButton() {
    if (this.state.loading) {
          return <Spinner size="small" />;
    }
    return (
      // Bind to this context to access this object once passed down to child
      <Button onPress={this.onButtonPress.bind(this)}>
        Log In
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          {
          // onChangeText callback
          // TextInput has no idea what its value is.
          // It only finds out after onChangeText is called
          // Text input is held in the state, we ALWAYS know the State
          // Useful for validation, and using that state which is available
          }
          <Input
            label="Email"
            placeholder="hello@myinbox.com"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Password"
            placeholder="Don't tell anyone!"
            secureTextEntry
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  }
};

export default LoginForm;
