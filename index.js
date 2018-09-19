/** @format */

// import { AppRegistry } from 'react-native';
// import App from './App';
// import { name as appName } from './app.json';
//
// AppRegistry.registerComponent(appName, () => App);

import React from 'react';
import { AppRegistry, Text } from 'react-native';

const App = () => (
    <Text> Ciao Andrea </Text>
);

AppRegistry.registerComponent('albums', () => App);
