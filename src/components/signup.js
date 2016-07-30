import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  TextInput,
  Picker,
  StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';
const Item = Picker.Item;

class Signup extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wtExit}>
          <TouchableHighlight
            onPress={() => this.props.navigator.pop()}
            underlayColor={'white'}
            style={styles.headerIcon}
          >
            <Icon name='chevron-left' size={40} color='#ffffff' />
          </TouchableHighlight>
          <View
            style={styles.headerText}
          >
            <Text style={styles.titleText}>
              Registro
            </Text>
          </View>
          <View style={styles.headerIcon}>
          </View>
        </View>
        <View style={styles.signupForm}>
          <View style={styles.formHorizontal}>
            <TextInput style={styles.sharedInputs} placeholder={'Nombre'}/>
            <TextInput style={styles.sharedInputs} placeholder={'Apellido'}/>
          </View>
          <TextInput style={styles.singleInputs} placeholder={'Email'}/>
          <TextInput style={styles.singleInputs} placeholder={'Contraseña'}/>
          <TextInput style={styles.singleInputs} placeholder={'Dirección'}/>
          <TextInput style={styles.singleInputs} placeholder={'Número'}/>
          <View style={styles.formHorizontal}>
            <TextInput style={styles.sharedInputs} placeholder={'Región'}/>
            <TextInput style={styles.sharedInputs} placeholder={'Comuna'}/>
          </View>
        </View>
        <View style={styles.signupLowerButtons}>
          <View style={styles.loginButton}>
            <TouchableHighlight
              onPress={() => this.props.navigator.push({name: 'tabs'})}
              style={styles.logInBtn}>
              <Text style={styles.textLogInBtn}>Comienza a ahorrar</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.signupFooter}>
          <View style={styles.footerLine}>
            <Text style={styles.footerText}>Al registrarse estas aceptando las </Text>
            <TouchableHighlight>
              <Text style={[styles.footerText, styles.links]}>condiciones de uso</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.footerLine}>
            <Text style={styles.footerText}> y las</Text>
            <TouchableHighlight>
              <Text style={[styles.footerText, styles.links]}> políticas de privacidad</Text>
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
  signupForm: {
    flex: 7,
    padding: 20
  },
  signupLowerButtons: {
    flex: 1
  },
  signupFooter: {
    flex: 1
  },
  loginButton:{
    backgroundColor: '#2abf88',
    borderRadius: 50,
    width: 350,
    height: 60,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  textLogInBtn: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Open Sans'
  },
  footerText: {
    fontFamily: 'Open Sans',
    color: '#343439'
  },
  links: {
    color: '#1c57ff'
  },
  footerLine: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  formHorizontal: {
    flexDirection: 'row',
    marginBottom: 20
  },
  sharedInputs: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#cccccc',
    height: 50,
    fontFamily: 'Open Sans',
    fontSize: 13,
    borderRadius: 3,
    paddingLeft: 10
  },
  singleInputs: {
    borderWidth: 1,
    borderColor: '#cccccc',
    height: 50,
    fontFamily: 'Open Sans',
    fontSize: 13,
    paddingLeft: 10,
    marginBottom: 20,
    borderRadius: 3
  }
});

export default Signup;
