import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';

export default class ArrowButton extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.goBack()} >
        <Image source={require('../assets/arrow-left.png')} style={{height:17, width:18}} />
      </TouchableOpacity>
    );
  }
}
