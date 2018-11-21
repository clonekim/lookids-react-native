import React from 'react';
import {TouchableOpacity, Button, FlatList, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import {createStackNavigator, NavigationEvents } from 'react-navigation';
import {s3Url} from '../config';

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
      {id:1, path: 'f1.png', name: '스윙베베'},
      {id:2, path: 'f2.png', name: '스타일노리터'},
      {id:3, path: 'f3.png', name: '윌튼키즈'},
      {id:4, path: 'f4.png', name: '미네뜨'},
      {id:5, path: 'f5.png', name: '제이키즈'},
      {id:6, path: 'f6.png', name: '쿠키하우스'},
      {id:7, path: 'f7.png', name: '윌튼키즈'},
      {id:8, path: 'f8.png', name: '더보기'},

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
