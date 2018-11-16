import React from 'react';
import { withNavigationFocus } from 'react-navigation';
import { connect } from 'react-redux';
import { Platform, 
         View,
         Text, 
         FlatList,
         TouchableOpacity,
         StyleSheet } from 'react-native';

import HomeListItem from '../components/HomeListItem';
import SearchBox    from '../components/SearchBox';
import { fetchStores }  from '../actions';

class HomeBoard extends React.Component {
  
  static navigationOptions = {
    tabBarLabel: '쇼핑몰'
  };

  constructor() {
    super();
    this.state = {
      isFocused: false
    }
  }

  componentDidMount() {
    this.props.onLoad();
  }

  render() {

    return (
      <View style={{flex:1}}>
        <SearchBox path={'HomeSearch'}>쇼핑몰 검색 </SearchBox>
        <FlatList
          data={this.props.stores}
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

const mapStateToProps = state => {
  return {
    stores: state.api.stores
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLoad() {
      dispatch(fetchStores(null));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(withNavigationFocus(HomeBoard));
