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

class Offers extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wtExit}>
          <TouchableHighlight
            underlayColor={'white'}
            style={styles.headerIcon}
          >
            <Icon name='chevron-left' size={40} color='#ffffff' />
          </TouchableHighlight>
          <View
            style={styles.headerText}
          >
            <Text style={styles.titleText}>
              Nueva oferta
            </Text>
          </View>
          <View style={styles.headerIcon}>
          </View>
        </View>
        <View style={styles.offerTitle}>
          <View style={styles.offerIcon}>
            <Image
              source={require('image!entel-icon')}
              style={styles.companyIcon}
            />
          </View>
          <View style={styles.offerInfo}>
            <Text style={styles.titleTxt}>OFERTA DE ENTEL</Text>
            <Text style={styles.dateTxt}>ENVIADA EL 24 DE JULIO</Text>
          </View>
        </View>
        <View style={styles.offerButtons}>
          <TouchableHighlight
            underlayColor={'white'}
            style={styles.offerBtn}
          >
            <Text style={styles.offerTxt}>OFERTA</Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor={'white'}
            style={styles.conditionsBtn}
          >
            <Text style={styles.conditionsTxt}>CONDICIONES</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.offerDesc}>
          <Text style={styles.descTxt}>* 20% descuento en tu cuenta</Text>
          <Text style={styles.descTxt}>* $20.000 mensual por 3.5GB, minutos ilimitados</Text>
          <Text style={styles.descTxt}>* $20.000 mensual por 3.5GB, minutos ilimitados</Text>
          <TouchableHighlight
            onPress={() => this.props.navigator.immediatelyResetRouteStack([{ name: 'chat'}])}
            style={styles.actionBtn}>
            <Text style={styles.actionTxt}>Quiero que me contacten</Text>
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
  offerTitle: {
    flex: 2,
    backgroundColor: '#eeeeee',
    flexDirection: 'row',
    alignItems: 'center'
  },
  offerButtons: {
    flex: 1,
    flexDirection: 'row'
  },
  offerDesc: {
    flex: 8,
    padding: 30
  },
  offerBtn: {
    flex: 1,
    backgroundColor: '#2abf88',
    borderColor: '#dddddd',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 0
  },
  conditionsBtn: {
    flex: 1,
    backgroundColor: 'white',
    borderColor: '#dddddd',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 0
  },
  offerTxt: {
    color: 'white',
    fontFamily: 'Open Sans'
  },
  conditionsTxt: {
    color: '#343439',
    fontFamily: 'Open Sans'
  },
  descTxt: {
    fontFamily: 'Open Sans',
    marginBottom: 20,
    color: '#262626'
  },
  actionBtn: {
    backgroundColor: '#2abf88',
    borderRadius: 50,
    width: 350,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 200
  },
  actionTxt: {
    fontFamily: 'Open Sans',
    color: 'white'
  },
  offerIcon: {
    flex: 1,
    paddingLeft: 40
  },
  offerInfo: {
    flex: 5,
    marginLeft: 40
  },
  companyIcon: {
    width: 64,
    height: 64
  },
  titleTxt: {
    fontFamily: 'OpenSans-Semibold',
    color: '#343439',
    fontSize: 20
  },
  dateTxt: {
    fontFamily: 'OpenSans-Italic',
    color: '#343439'
  },
});

export default Offers;
