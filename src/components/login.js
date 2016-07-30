import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require('image!poquet-logo')}
            style={styles.logo}
          />
        </View>
        <View style={styles.textFields}>
          <View style={styles.tiWrapper}>
            <TextInput
              style={styles.textInput}
              placeholder={'Email'}
            />
          </View>
          <View style={styles.tiWrapper}>
            <TextInput
              style={styles.textInput}
              placeholder={'Contraseña'}
            />
          </View>
        </View>
        <View style={styles.loginButton}>
          <TouchableHighlight
            onPress={() => this.props.navigator.push({name: 'tabs'})}
            style={styles.logInBtn}>
            <Text style={styles.textLogInBtn}>LOGIN</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.bottomLinks}>
          <TouchableHighlight
            onPress={() => this.props.navigator.push({name: 'signup'})}
          >
            <Text style={styles.bottomLinkText}>Crea tu cuenta</Text>
          </TouchableHighlight>
          <TouchableHighlight>
            <Text style={styles.bottomLinkText}>¿Olvidaste tu contraseña?</Text>
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
  textFields: {
    flex: 2
  },
  textInput: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    fontFamily: 'Open Sans',
    fontSize: 14,
    paddingLeft: 10,
    marginBottom: 15,
    borderWidth: 0
  },
  tiWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    width: 350,
    alignSelf: 'center'
  },
  logoContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 100,
    height: 100
  },
  loginButton:{
    backgroundColor: '#2abf88',
    borderRadius: 50,
    width: 350,
    height: 60,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  logInBtn:{
    flex: 1,
    justifyContent: 'center'
  },
  textLogInBtn: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Open Sans'
  },
  bottomLinks:{
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 40
  },
  bottomLinkText: {
    fontFamily: 'Open Sans',
    fontSize: 13,
    color: '#2abf88'
  }
});

export default Login;
