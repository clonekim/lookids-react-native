import React from 'react';
import {View,
        TouchableWithoutFeedback,
        TextInput,
        StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import NavigationService from '../navigationService';

export default class extends React.Component {
  
  render(children) {
    return (
      <TouchableWithoutFeedback onPress={() => NavigationService.navigate(this.props.path) }>
        <View style={{backgroundColor:'#fff'}}>
          <TextInput style={styles.searchBox}
                     editable={false}
                     defaultValue={this.props.children}/>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}



const styles =StyleSheet.create({
  searchBox:{
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    margin: 4
  }
});
