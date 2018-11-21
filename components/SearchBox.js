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
      <TouchableWithoutFeedback onPress={() => NavigationService.navigate(this.props.path)}>
        <View style={{height:50, backgroundColor:'#e6eaed', padding:4}}>
          <View style={{flex:1, backgroundColor:'#fff', justifyContent:'center'}}>
            <TextInput style={styles.searchBox}
                       editable={false}
                       defaultValue={this.props.children}/>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}



const styles =StyleSheet.create({
  searchBox:{
    padding: 5
  }
});
