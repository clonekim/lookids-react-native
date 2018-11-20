import React from 'react';
import {TouchableOpacity, Button, FlatList, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import {createStackNavigator, NavigationEvents } from 'react-navigation';

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
      {id:1, path: 'http://192.168.0.148:8000/images/f1.png', name: '스윙베베'},
      {id:2, path: 'http://192.168.0.148:8000/images/f2.png', name: '스타일노리터'},
      {id:3, path: 'http://192.168.0.148:8000/images/f3.png', name: '윌튼키즈'},
      {id:4, path: 'http://192.168.0.148:8000/images/f4.png', name: '미네'},
      {id:5, path: 'http://192.168.0.148:8000/images/f5.png', name: '제이키즈'},
      {id:6, path: 'http://192.168.0.148:8000/images/f6.png', name: '쿠키하우스'},
      {id:7, path: 'http://192.168.0.148:8000/images/f7.png', name: '윌튼키즈'},
      {id:8, path: 'http://192.168.0.148:8000/images/f8.png', name: '더보기'},

    ];
    this.setState({threads:threads});
  }

  render() {

    return (
      <FlatList
        data={formatData(this.state.threads, 4)}
        numColumns={4}
        keyExtractor={(item) =>  item.key|| item.id.toString()}
        renderItem={({item}) => {
          if (item.empty === true) {
            return <View style={[styles.itemInvisible]} />;
          }
          return (
            <TouchableOpacity style={{flex: 1, }} >
              <View style={styles.itemView}>
                <Image source={{uri: item.path }} style={{width:56, height: 56}}/>
                <Text ellipsizeMode={'tail'}
                      numberOfLines={1}
                      style={{fontSize: 12}} >{item.name}</Text>
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
    height: 90,
    alignItems: 'center',
    margin: 1,
    shadowColor: 'rgba(73, 80, 87, 0.1)',
    shadowOffset: { width: 1, height: 0 },
    shadowRadius: 1,
    backgroundColor: '#ffffff',
  }
});
