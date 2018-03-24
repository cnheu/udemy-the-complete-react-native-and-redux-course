// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
// import { YellowBox } from 'react-native';

// Create a component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

// Disable Yellow Warnings
console.disableYellowBox = true;

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
