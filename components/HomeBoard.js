import React from 'react';
import { connect } from 'react-redux';
import { withNavigationFocus } from 'react-navigation';
import { Platform, View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import HomeListItem from './HomeListItem';
import SearchBox    from './SearchBox';
import { fetchStores } from '../actions';
import NavigationService from '../navigationService';
import { apiEndPoint } from '../config'



class HomeBoard extends React.Component {
  
  static navigationOptions = {
    tabBarLabel: '샵랭킹'
  };

  constructor() {
    super();
  }
  
  componentDidMount() {
    this.props.fetchData( apiEndPoint + '/stores');
  }

  render() {
    if(this.props.isPending) {
      return <ActivityIndicator size="small" />
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


const mapStateToProps = state => ({
  contents: state.stores,
  hasError: state.getFetchError,
  isPending: state.getPending
});

const mapDispatchToProps= dispatch => ({
  fetchData: (url) => dispatch(fetchStores(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeBoard);
