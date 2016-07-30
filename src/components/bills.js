import React, { Component } from 'react';
import {
  Image,
  View,
  ListView,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';

const data = [
  { title: 'Cuenta telefonía móvil', company: 'Entel', icon: require('image!entel-icon') },
  { title: 'Cuenta hogar (tv, inet, fono)', company: 'VTR', icon: require('image!vtr-icon')}
];

class Bills extends Component {

  constructor(props) {
    super(props);
		this.state = {
			listViewData: data
		};
  }

  deleteRow(secId, rowId, rowMap) {
		rowMap[`${secId}${rowId}`].closeRow();
		const newData = [...this.state.listViewData];
		newData.splice(rowId, 1);
		this.setState({listViewData: newData});
	}

  render() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return (
      <View style={styles.container}>
        <View style={styles.wtExit}>
          <View style={styles.headerIcon}>
          </View>
          <View
            style={styles.headerText}
          >
            <Text style={styles.titleText}>
              Mis cuentas
            </Text>
          </View>
          <TouchableHighlight
            onPress={() => this.props.navigator.pop()}
            underlayColor={'white'}
            style={styles.headerIcon}
          >
            <Icon name='plus' size={40} color='#ffffff' />
          </TouchableHighlight>
        </View>
        <View style={styles.billsList}>
          <SwipeListView
            dataSource={ds.cloneWithRows(data)}
            renderRow={ data => (
							<TouchableHighlight
								onPress={ _ => console.log('You touched me') }
								style={styles.rowFront}
								underlayColor={'#AAA'}
							>
								<View style={styles.billRow}>
                  <View style={styles.billIcon}>
                    <Image
                      source={data.icon}
                      style={styles.companyIcon}
                    />
                  </View>
                  <View style={styles.billInfo}>
									  <Text style={styles.billTitle}>{data.title}</Text>
                    <Text style={styles.company}>{data.company}</Text>
                  </View>
                  <View style={styles.billArrow}>
                    <Icon name='chevron-right' size={30} color='black' />
                  </View>
								</View>
							</TouchableHighlight>
						)}
						renderHiddenRow={ (data, secId, rowId, rowMap) => (
							<View style={styles.rowBack}>
								<TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnRight]} onPress={ _ => this.deleteRow(secId, rowId, rowMap) }>
                  <Icon name='close' size={30} color='white' />
                  <Text style={styles.backTextWhite}>Eliminar</Text>
								</TouchableOpacity>
							</View>
						)}
						rightOpenValue={-75}
            />
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
  billsList: {
    flex: 9
  },
	backTextWhite: {
		color: '#FFF'
	},
	rowFront: {
		alignItems: 'center',
		backgroundColor: 'white',
		borderBottomColor: '#eaeaea',
		borderBottomWidth: 1,
		justifyContent: 'center',
		height: 80,
	},
	rowBack: {
		alignItems: 'center',
		backgroundColor: 'white',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: 15,
	},
	backRightBtn: {
		alignItems: 'center',
		bottom: 0,
		justifyContent: 'center',
		position: 'absolute',
		top: 0,
		width: 75
	},
	backRightBtnLeft: {
		backgroundColor: 'blue',
		right: 75
	},
	backRightBtnRight: {
		backgroundColor: '#e04c6e',
		right: 0
	},
	controls: {
		alignItems: 'center',
		marginBottom: 30
	},
	switchContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginBottom: 5
	},
	switch: {
		alignItems: 'center',
		borderWidth: 1,
		borderColor: 'black',
		paddingVertical: 10,
		width: 100,
	},
  billRow: {
    flexDirection: 'row',
  },
  billIcon: {
    flex: 1,
    paddingLeft: 30
  },
  billInfo: {
    flex: 5
  },
  companyIcon: {
    width: 48,
    height: 48
  },
  billTitle: {
    fontFamily: 'Open Sans',
    color: '#343439'
  },
  company: {
    fontFamily: 'Open Sans',
    color: '#b9b9b9'
  },
  billArrow: {
    justifyContent: 'center'
  }
});

export default Bills;
