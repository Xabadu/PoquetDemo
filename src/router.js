import React, { Component } from 'react';
import {
  Navigator,
  StyleSheet
} from 'react-native';

import WalkThrough from './components/walkthrough';
import Login from './components/login';
import Signup from './components/signup';
import Tabs from './components/tabs';
import Camera from './components/camera';
import Chat from './components/chat';

const ROUTES = {
  walkthrough: WalkThrough,
  login: Login,
  signup: Signup,
  tabs: Tabs,
  camera: Camera,
  chat: Chat
};

class Router extends Component {

  constructor(props) {
    super(props);
    this.renderScene = this.renderScene.bind(this);
  }

  renderScene(route, navigator) {
    const Component = ROUTES[route.name];
    return <Component {...route.props} route={route} navigator={navigator} />
  }

  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{name: 'walkthrough'}}
        renderScene={this.renderScene}
        sceneStyle={{backgroundColor: 'white'}}
      />
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Router;
