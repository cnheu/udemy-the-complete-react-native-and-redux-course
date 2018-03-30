import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCPBYlT8RrYz3tExDEbxt9ED8mCtrZf3pw',
      authDomain: 'manager-a8c39.firebaseapp.com',
      databaseURL: 'https://manager-a8c39.firebaseio.com',
      projectId: 'manager-a8c39',
      storageBucket: 'manager-a8c39.appspot.com',
      messagingSenderId: '1032024500157'
    };

    firebase.initializeApp(config);
  }


  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
