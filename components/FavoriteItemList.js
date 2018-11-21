import React from 'react';
import {TouchableOpacity, Button, FlatList, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import {createStackNavigator, NavigationEvents } from 'react-navigation';
import util from '../util';
import { s3Url } from '../config';

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);
  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }

  return data;
};


export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      threads: []
    };
  }

  componentDidMount() {
    let threads = [
      {id:1, path: 'p1.png', name: '키즈 맨투맨 모음', price: 12800},
      {id:2, path: 'p2.png', name: '양털 집업', price: 32000},
      {id:3, path: 'p3.png', name: '스내지 신상품', price: 49000},
      {id:4, path: 'p4.png', name: '간절기 레이어드', price: 32000},
      {id:5, path: 'p5.png', name: '블랙 무스', price: 68000},
      {id:6, path: 'p6.png', name: '꼬마숙녀 투피스', price: 25000},
      {id:7, path: 'p1.png', name: '키즈 맨투맨 모음', price: 12800},
      {id:8, path: 'p2.png', name: '양털 집업', price: 32000},
      {id:9, path: 'p3.png', name: '스내지 신상품', price: 49000},
    ];
    threads.map((i) => {
      i.path = s3Url + '/sample/' + i.path
      return i      
    });

    this.setState({threads:threads});
  }

  render() {

    return (
      <FlatList
        data={formatData(this.state.threads, 3)}
        numColumns={3}
        keyExtractor={(item) =>  item.key|| item.id.toString()}
        renderItem={({item}) => {
          if (item.empty === true) {
            return <View style={[styles.itemInvisible]} />;
          }
          return (
            <TouchableOpacity style={{flex: 1}} >
              <View>
                <View style={{alignItems:'center', padding:2}}>
                  <Image source={{uri: item.path }} style={{width:127, height: 70}}/>
                </View>
                
                <View style={{flex:1, alignItems:'flex-start', paddingLeft:5, paddingBottom: 15, paddingTop: 4}}>
                  <Text ellipsizeMode={'tail'}
                        numberOfLines={1}
                        style={{fontSize: 12, paddingLeft: 5}} >{item.name}</Text>
                  <Text style={{fontSize:10, color:'#868e96', paddingLeft: 5}}>{util.currencyFormat(item.price)}원 </Text>
                </View>                
              </View>
            </TouchableOpacity>
          );
        }}/>
    );
  }
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
