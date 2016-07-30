import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Router from './src/router';

class PoquetDemo extends Component {
  render() {
    return (
      <Router />
    );
  }
}

AppRegistry.registerComponent('PoquetDemo', () => PoquetDemo);
