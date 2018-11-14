import React from 'react';
import { Platform, 
         View,
         Text, 
         TextInput,
         Button,
         Image,
         FlatList,
         TouchableWithoutFeedback,
         TouchableOpacity,
         StyleSheet } from 'react-native';

import HomeListItem from '../components/HomeListItem';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class HomeBoard extends React.Component {
  
  static navigationOptions = {
    tabBarLabel: '쇼핑몰'
  };

  constructor() {
    super();
    this.state = {
      threads: []
    };
  }

  componentDidMount() {

    // fetch('http://192.168.0.148:3000/api/malls', {
    //   method:'GET',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //     deviceOS: Platform.OS
    //   }
    // })
    // .then(response => response.json())
    // .then(responseJson => {
    //   let threads = responseJson;
    //   threads = threads.map(i=> {
    //     i.key = '' + i.id
    //     i.last_rank = '-'
    //     i.rank = i.id
    //     return i
    //   });

    //   this.setState({threads});
    // })

    this.setState({
      threads: [
        {key:'1', rank: 1, name: '83kjkd03'},
        {key:'2', rank: 999, name:'xxx'}
      ]
    });

  }

  render() {
    return (
      <View style={{flex:1}}>
        <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('HomeSearch')}>
          <View style={{backgroundColor:'#fff'}}>
            <TextInput style={styles.searchBox}
                       editable={false}
                       defaultValue={"쇼핑몰 검색"}/>
          </View>
        </TouchableWithoutFeedback>
       
        <FlatList
          data={this.state.threads}
          renderItem={({item}) => {
            return (
              <TouchableOpacity>
                <View style={{flex: 1}}>
                  <HomeListItem {...item}/>
                </View>
              </TouchableOpacity>
            );
          }}/>
        
      </View>
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
