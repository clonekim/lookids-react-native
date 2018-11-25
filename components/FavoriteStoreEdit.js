import React from 'react';
import {connect} from 'react-redux';
import {TouchableOpacity, ToastAndroid, FlatList,  View, Text, StyleSheet } from 'react-native';
import ArrowButton from './ArrowButton';
import HomeSearchListItem from './HomeSearchListItem';
import {fetchFavorites, removeFavorites} from '../actions';
import {apiEndPoint} from '../config';


class FavoriteStoreEdit extends React.Component {

  constructor() {
    super();
    this.state = {
      editMode: 'viewMode',
      clicked:  0,
    };
  }

  componentWillMount() {
    this.props.fetchData(apiEndPoint + '/favorites?page=1&limit=100');
  }

  selectionHandler(item) {
    this.props.updateFavoriteMark(item.id)
    this.setState({clicked: item.id})
  }
  
  applyUpdateFavorites() {
    let rows = this.props.contents.rows
        .filter(i => i.selected === true)
        .map(i=> i.id)

    if(rows.length > 0) {
      this.props.deleteFavorites(apiEndPoint +'/favorites', rows)
    }
  }

  getMarkedCount() {
    return this.props.contents.rows.filter(i => i.selected === true).length;
  }

  render() {
    return (
      <View style={{flex:1, backgroundColor:'#fff'}}>
        <View style={{height:52, flexDirection:'row'}}>
          <View style={{paddingLeft:15, justifyContent:'center', width:51}}>
            <ArrowButton {...this.props} />
          </View>
          <View style={{alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
            <Text style={styles.title}>즐겨찾기</Text>
            <Text style={styles.number}>({this.props.contents.total})</Text>
          </View>

          <View style={{flex:1, alignItems:'flex-end', justifyContent:'center', paddingRight: 13}}>
            <TouchableOpacity style={this.getMarkedCount() == 0 ? styles.editTextTouch:styles.editTextCompleteTouch} onPress={() => this.applyUpdateFavorites()}>
              <Text style={this.getMarkedCount() == 0 ? styles.editText: styles.editTextComplete}>{this.getMarkedCount() == 0 ? '편집': '완료'}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{borderWidth:1, height:0, borderColor:'#dee2e6', borderStyle:'solid'}}/>
        <Text>{JSON.stringify(this.props.contents)}</Text>
        <FlatList
          style={{flex:1}}
          data={this.props.contents.rows}
          keyExtractor={item => item.key || item.id.toString()}
          renderItem={({item}) => {
            return (
              <HomeSearchListItem {...item} handler={this.selectionHandler.bind(this)}/>
            );
          }} />
        
      </View>
    );
  }
}


const styles = StyleSheet.create({
  title: {
    height: 29,
    color: '#212529',
    fontFamily: 'Noto Sans CJK KR Regular',
    fontSize: 20,
    fontWeight: '400',
    paddingRight: 15
  },

  number: {
    color: '#9b9b9b',
    fontFamily: 'Noto Sans CJK KR Regular',
    fontSize: 15,
    fontWeight: '500'
  },

  editTextTouch: {
    width:61,
    height:27, 
    borderColor:'#868e96',
    borderStyle:'solid',
    borderWidth:1,
    alignItems:'center',
    justifyContent:'center'
  },

  editText: {
    color:'#495057', 
    fontSize:13,
    fontFamily:'Noto Sans CJS KR Regular'
  },

  editTextCompleteTouch: {
    width:61,
    height:27, 
    borderColor:'#ffaf08',
    borderStyle:'solid',
    borderWidth:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#ffaf08'
  },
  
  editTextComplete: {
    color:'#fff',
    fontSize:13, 
    fontFamily:'Noto Sans CJS KR Regular'
  }

});


const mapStateToProps = state => ({
  contents: state.favorites
});

const mapDispatchToProps = dispatch => ({
  fetchData: (url) => dispatch(fetchFavorites(url)),
  updateFavoriteMark: (id) => dispatch({type:'MARK_FAVORITE_ID', id: id}),
  deleteFavorites: (url, params) => dispatch(removeFavorites(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteStoreEdit);
