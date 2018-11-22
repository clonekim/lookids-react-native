import React from 'react';
import {connect} from 'react-redux';
import {Image, TouchableOpacity, Text, View } from 'react-native';
import {apiEndPoint} from '../config';
import {updateFavorite, deleteFavorite} from '../actions';

const CirclePlusButton = (props) => {
  if(props.favor == 0)
    return <Image source={require('../assets/white-circle-plus.png')} style={{width:28, height:28}}/>;
  else
    return <Image source={require('../assets/yellow-circle-plus.png')} style={{width:28, height:28}}/>;
};


class FavoriteButton extends React.Component {
  render() {
    return (
      <TouchableOpacity style={{justifyContent:'center'}} onPress={() => this.props.updateFavorite(this.props.store)} >
        <View style={{ justifyContent:'center', alignItem:'center', paddingRight:10}}>
          <CirclePlusButton favor={this.props.store.favor}/>
        </View>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = state => ({
  store: state.store,
});

const mapDispatchToProps = dispatch => ({
  updateFavorite: (store) => {
    if(store.favor == 0)
      return dispatch(updateFavorite(apiEndPoint +'/favorites',{id: store.id}));
    else
      return dispatch(deleteFavorite(apiEndPoint +'/favorites/' + store.id));
  }
    
});

export default connect(mapStateToProps, mapDispatchToProps)( FavoriteButton);
