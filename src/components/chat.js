import React, { Component } from 'react';
import {
  Image,
  View,
  Text,
  TouchableHighlight,
  TextInput,
  Picker,
  StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';

class Chat extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wtExit}>
          <TouchableHighlight
            onPress={() => this.props.navigator.push({ name: 'tabs', props: { defaultTab: 'offers'}})}
            underlayColor={'white'}
            style={styles.headerIcon}
          >
            <Icon name='chevron-left' size={40} color='#ffffff' />
          </TouchableHighlight>
          <View
            style={styles.headerText}
          >
            <Text style={styles.titleText}>
              Alicia
            </Text>
          </View>
          <View style={styles.headerIcon}>
            <Icon name='gear' size={30} color='#ffffff' />
          </View>
        </View>
        <View style={styles.chatScreen}>
          <Image
            source={require('image!chat')}
            style={styles.chatBg}
          />
        </View>
        <View style={styles.chatFooter}>
          <View style={styles.footerLeft}>
            <Icon name='plus' size={30} color='#b2b2b2' />
          </View>
          <View style={styles.footerCenter}>
            <Text style={styles.sendText}>Type a message here</Text>
          </View>
          <View style={styles.footerRight}>
            <TouchableHighlight style={styles.sendButton}>
              <Text style={styles.sendButtonTxt}>Send</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wtExit: {
    flex: 1,
    marginTop: 20,
    paddingTop: 5,
    backgroundColor: '#2abf88',
    flexDirection: 'row'
  },
  headerIcon: {
    flex: 1,
    justifyContent: 'center'
  },
  headerText: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: 'white',
    fontFamily: 'Open Sans',
    fontSize: 16
  },
  chatScreen: {
    flex: 8,
    paddingTop: 5,
    paddingLeft: 5
  },
  chatBg: {
    width: 400,
    height: 570
  },
  chatFooter: {
    flex: 1,
    backgroundColor: '#ededed',
    borderTopWidth: 1,
    borderColor: '#dfdede',
    flexDirection: 'row',
    alignItems: 'center'
  },
  footerLeft: {
    flex: 1,
    paddingLeft: 15
  },
  footerCenter: {
    flex: 7
  },
  footerRight: {
    flex: 2,
    paddingRight: 20
  },
  sendText: {
    fontFamily: 'Open Sans',
    color: '#b2b2b2'
  },
  sendButton: {
    backgroundColor: '#2abf88',
    padding: 5,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  sendButtonTxt: {
    fontFamily: 'OpenSans-Semibold',
    color: 'white'
  }
});

export default Chat;
