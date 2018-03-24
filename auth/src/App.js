import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  // Lifecycle method belonging to Component
  // Automatically called, as long as name is correct
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyADy9yK6rhmfNMxemHReLRmFtj19IDL16Q",
      authDomain: "auth-f1426.firebaseapp.com",
      databaseURL: "https://auth-f1426.firebaseio.com",
      projectId: "auth-f1426",
      storageBucket: "auth-f1426.appspot.com",
      messagingSenderId: "167629610164"
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />

      </View>
    )
  }
}

export default App;
