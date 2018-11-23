import React from 'react';
import {TouchableOpacity, Button, FlatList, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import {createStackNavigator, NavigationEvents } from 'react-navigation';
import NavigationService from '../navigationService';
import util from '../util';

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);
  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }

  return data;
};


export default (props) => {
  return (
    <FlatList
      data={formatData(props.rows, 3)}
      numColumns={3}
      keyExtractor={(item) =>  item.key|| item.id.toString()}
      renderItem={({item}) => {
        if (item.empty === true) {
          return <View style={[styles.itemInvisible]} />;
        }
        return (
          <TouchableOpacity style={{flex: 1}} onPress={() => NavigationService.navigate('ItemWebPage', item)} >
            <View style={{flex:1}}>
              <View style={{alignItems:'center', padding:2}}>
                <Image source={{uri: item.image_path }} style={{width:120, height: 70}}/>
              </View>
              
              <View style={{flex:1, alignItems:'flex-start', paddingLeft:5, paddingBottom: 15, paddingTop: 4}}>
                <Text ellipsizeMode={'tail'}
                      numberOfLines={1}
                      style={{fontSize: 12, paddingLeft: 5 ,fontFamily:'Noto Sans CJK KR Regular' }} >{item.name}</Text>
                <Text style={{fontSize:10, color:'#868e96', paddingLeft: 5}}>{util.currencyFormat(item.price)}원 </Text>
              </View>                
            </View>
          </TouchableOpacity>
        );
      }}/>
  );

}

const styles = StyleSheet.create({
  itemInvisible: {
    flex: 1,
    backgroundColor: 'transparent',
  },

  itemView: {
    flex: 1,
    alignItems: 'center',
    margin: 1,
    shadowColor: 'rgba(73, 80, 87, 0.1)',
    shadowOffset: { width: 1, height: 0 },
    shadowRadius: 1,
    backgroundColor: '#ffffff',
  }
});
