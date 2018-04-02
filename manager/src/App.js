import React, { Component } from 'react';
// import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
// import LoginForm from './components/LoginForm';
import Router from './Router';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
          <Router />
      </Provider>
    );
  }
}

export default App;
