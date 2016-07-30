import React, { Component } from 'react';
import {
  StyleSheet,
  TabBarIOS,
  Text,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons'

import Bills from './bills';
import Offers from './offers';

class Tabs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: this.props.defaultTab || 'bills'
    };
  }

  render() {
    return (
      <TabBarIOS
        unselectedTintColor="#9daab0"
        tintColor="#2abf88"
        barTintColor="#f7f9f8">
        <Icon.TabBarItemIOS
          title="Cuentas"
          iconName="navicon"
          selected={this.state.selectedTab === 'bills'}
          onPress={() => {
            this.setState({
              selectedTab: 'bills',
            });
          }}>
          <Bills />
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          iconName="plus"
          selected={this.state.selectedTab === 'home'}
          onPress={() => {
            this.props.navigator.immediatelyResetRouteStack([{name: 'camera'}]);
          }}>
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title="Ofertas"
          iconName="comment"
          badge={2}
          selected={this.state.selectedTab === 'offers'}
          onPress={() => {
            this.setState({
              selectedTab: 'offers',
            });
          }}>
          <Offers navigator={this.props.navigator} />
        </Icon.TabBarItemIOS>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default Tabs;
