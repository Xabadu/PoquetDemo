import React, { Component } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';
import Swiper from 'react-native-swiper';

class WalkThrough extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wtExit}>
          <TouchableHighlight
            onPress={() => this.props.navigator.push({name: 'login'})}
            underlayColor={'white'}
          >
            <Icon name='close' size={30} color='#2abf88' />
          </TouchableHighlight>
        </View>
        <View style={styles.wtSlides}>
          <Swiper style={styles.slidesWrapper}
            height={450}
            loop={false}
            dot={<View style={{backgroundColor:'rgba(0,0,0,.2)', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
            activeDot={<View style={{backgroundColor: '#2abf88', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
          >
            <View style={styles.slide}>
              <Image
                source={require('image!wt-phone')}
                style={styles.wtImages}
              />
              <Text style={styles.wtTexts}>
                You can follow favorite people anytime and get their updates right on your News Feed
              </Text>
            </View>
            <View style={styles.slide}>
              <Image
                source={require('image!wt-phone')}
                style={styles.wtImages}
              />
              <Text style={styles.wtTexts}>
                You can follow favorite people anytime and get their updates right on your News Feed
              </Text>
            </View>
            <View style={styles.slide}>
              <Image
                source={require('image!wt-phone')}
                style={styles.wtImages}
              />
              <Text style={styles.wtTexts}>
                You can follow favorite people anytime and get their updates right on your News Feed
              </Text>
            </View>
          </Swiper>
        </View>
        <View style={styles.wtButtons}>
          <TouchableHighlight style={styles.buttonLogIn}>
            <Text style={styles.textLogIn} onPress={() => this.props.navigator.push({name: 'login'})}>LOGIN</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.buttonSignUp}>
            <Text style={styles.textSignUp} onPress={() => this.props.navigator.push({name: 'signup'})}>REGISTRATE</Text>
          </TouchableHighlight>
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
    paddingTop: 5
  },
  textExit: {
    textAlign: 'left',
    color: 'black'
  },
  wtSlides: {
    flex: 7
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  wtImages: {
    width: 180,
    height: 260,
    marginBottom: 30
  },
  wtTexts: {
    textAlign: 'center',
    color: '#2abf88',
    fontFamily: 'Open Sans'
  },
  wtButtons: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 5,
    marginBottom: 10,
    marginRight: 5
  },
  buttonLogIn: {
    flex: 1,
    backgroundColor: '#2abf88',
    borderRadius: 13,
    paddingTop: 10,
    paddingBottom: 10,
    marginRight: 5
  },
  textLogIn: {
    textAlign: 'center',
    color: 'white'
  },
  buttonSignUp: {
    flex: 1,
    borderColor: '#2abf88',
    borderRadius: 13,
    borderWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    marginRight:5
  },
  textSignUp: {
    textAlign: 'center',
    color: '#2abf88',
  }
});

export default WalkThrough;
