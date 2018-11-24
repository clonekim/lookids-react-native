import React from 'react';
import {Image, TouchableOpacity} from 'react-native';

export default (props) => {
  if(props.keyword.trim().length > 0) {
    return (
      <TouchableOpacity onPress={props.clearHandler} style={{width:50, alignItems:'flex-end'}}>
        <Image source={require('../assets/close.png')} style={{height:14, width:14}} />
      </TouchableOpacity>
    );
  } else {
    return null;
  }
};
