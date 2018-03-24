import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App.js';


// Disable Yellow Warnings
console.disableYellowBox = true;

AppRegistry.registerComponent('auth', () => App);
