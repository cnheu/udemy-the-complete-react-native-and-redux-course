import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  // Lifecycle method belonging to Component
  // Automatically called, as long as name is correct

  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyADy9yK6rhmfNMxemHReLRmFtj19IDL16Q',
      authDomain: 'auth-f1426.firebaseapp.com',
      databaseURL: 'https://auth-f1426.firebaseio.com',
      projectId: 'auth-f1426',
      storageBucket: 'auth-f1426.appspot.com',
      messagingSenderId: '167629610164'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        // return <LoginForm />;
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>;
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
