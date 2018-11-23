import React from 'react';
import {connect} from 'react-redux';
import {TouchableOpacity, Button, FlatList, StyleSheet, Text, View, Image } from 'react-native';


const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);
  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }

  return data;
};


class FavoriteStoreBoard extends React.Component {

  render() {
    return (
      <FlatList
        data={formatData(this.props.favorites, 4)}
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

export default FavoriteStoreBoard;
