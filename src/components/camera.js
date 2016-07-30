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
import Camera from 'react-native-camera';

class Capture extends Component {

  constructor(props) {
    super(props);
    this.camera = null;
    this.state = {
      camera: {
        aspect: Camera.constants.Aspect.fill,
        captureTarget: Camera.constants.CaptureTarget.cameraRoll,
        type: Camera.constants.Type.back,
        orientation: Camera.constants.Orientation.auto,
        flashMode: Camera.constants.FlashMode.auto,
      },
    };

    this.takePicture = this.takePicture.bind(this);
  }

  takePicture() {
    if (this.camera) {
      this.camera.capture()
        .then((data) => console.log(data))
        .catch(err => console.error(err));
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wtExit}>
          <TouchableHighlight
            onPress={() => this.props.navigator.push({ name: 'tabs' })}
            underlayColor={'white'}
            style={styles.headerIcon}
          >
            <Icon name='close' size={40} color='#ffffff' />
          </TouchableHighlight>
          <View
            style={styles.headerText}
          >
            <Text style={styles.titleText}>
              Foto de tu cuenta
            </Text>
          </View>
          <View style={styles.headerIcon}>
            <Icon name='refresh' size={40} color='#ffffff' />
          </View>
        </View>
        <View style={styles.camera}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={this.state.camera.aspect}
          captureTarget={this.state.camera.captureTarget}
          type={this.state.camera.type}
          flashMode={this.state.camera.flashMode}
          defaultTouchToFocus
        />
        </View>
        <View style={styles.cameraFooter}>
          <View style={styles.headerIcon}>
            <Icon name='image' size={48} color='#ffffff' />
          </View>
          <View style={styles.headerText}>
            <Icon name='camera' size={72} color='#ffffff' />
          </View>
          <View style={styles.headerIcon}>
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
  camera: {
    flex: 7
  },
  cameraFooter: {
    flex: 2,
    backgroundColor: '#2abf88',
    flexDirection: 'row'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});

export default Capture;
