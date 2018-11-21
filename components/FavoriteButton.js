import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class FavoriteButton extends React.Component {
  render() {
    return (
        <TouchableOpacity style={{justifyContent:'center'}} >
          <View style={{ justifyContent:'center', alignItem:'center', paddingRight:10}}>
            <Icon name="plus-circle" size={30} color="#ffaf08"/>
          </View>
        </TouchableOpacity>
    );
  }
}
