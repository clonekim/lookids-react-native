import React from 'react';
import {connect} from 'react-redux';
import {TouchableOpacity, ToastAndroid, FlatList,  View, Text, StyleSheet } from 'react-native';
import ArrowButton from './ArrowButton';
import HomeSearchListItem from './HomeSearchListItem';
import {fetchFavorites} from '../actions';
import {apiEndPoint} from '../config';


const EditButton = (props) => {

  return (
    <TouchableOpacity style={{width:61, height:27, borderColor:'#868e96', borderStyle:'solid', borderWidth:1, alignItems:'center', justifyContent:'center'}}>
      <Text style={{color:'#495057', fontSize:13, fontFamily:'Noto Sans CJS KR Regular'}}>편집</Text>
    </TouchableOpacity>
  );
};


class FavoriteStoreEdit extends React.Component {

  constructor() {
    super();
    this.state = {
      editMode: 'viewMode'
    };
  }

  componentWillMount() {
    this.props.fetchData(apiEndPoint + '/favorites?page=1&limit=100');
  }

  selectionHandler(x) {
    console.log('here', x);
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
            <TouchableOpacity style={this.state.editMode == 'viewMode'? styles.editTextTouch:styles.editTextCompleteTouch} onPress={() => this.setState({editMode: this.state.editMode =='viewMode'? 'editMode': 'viewMode'})}>
              <Text style={this.state.editMode =='viewMode' ? styles.editText: styles.editTextComplete}>{this.state.editMode =='viewMode'? '편집': '완료'}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{borderWidth:1, height:0, borderColor:'#dee2e6', borderStyle:'solid'}}/>
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
  fetchData: (url) => dispatch(fetchFavorites(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteStoreEdit);
