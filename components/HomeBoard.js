import React from 'react';
import { connect } from 'react-redux';
import { withNavigationFocus } from 'react-navigation';
import { Platform, View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import HomeListItem from './HomeListItem';
import SearchBox    from './SearchBox';
import { fetchContents } from '../actions/contents';
import NavigationService from '../navigationService';
import { apiEndPoint } from '../config'



class HomeBoard extends React.Component {
  
  static navigationOptions = {
    tabBarLabel: '샵랭킹'
  };

  constructor() {
    super();
    this.state = {
      isFocused: false
    }

  }
  
  componentDidMount() {
    this.props.fetchData( apiEndPoint + '/stores');
  }

  render() {
    if(this.props.isLoading) {
      return <Text> Loading... </Text>
    }

    return (      
      <View style={{flex:1}}>
        <View style={{height:2, backgroundColor:'#dddddd'}}></View>
        <SearchBox path={'HomeSearch'}>쇼핑몰 검색 </SearchBox>
        <FlatList
          data={this.props.contents}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => {
            return (
              <TouchableOpacity onPress={()=> NavigationService.navigate('HomePage', item) }>
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


const mapStateToProps = state => ({
  contents: state.contents,
  hasError: state.getContentsError,
  isLoading: state.loadContents
});

const mapDispatchToProps= dispatch => ({
  fetchData: (url) => dispatch(fetchContents(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeBoard);
