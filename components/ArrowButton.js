import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ArrowButton extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{justifyContent:'center'}} >
        <Image source={require('../assets/arrow-left.png')} style={{height:17, width:18}} />
      </TouchableOpacity>
    );
  }
}
