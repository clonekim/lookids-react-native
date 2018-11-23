import React from 'react';
import {connect} from 'react-redux';
import { StyleSheet, Text, View, Image } from 'react-native';
import util from '../util';
import {apiEndPoint} from '../config';
import {findStore } from '../actions';

class Badge extends React.Component {

  componentWillMount() {
    this.props.fetchData(apiEndPoint + '/stores/' + this.props.id)
  }

  render() {
    return (
      <View style={styles.badge}> 
        <Image source={{uri: this.props.image_path}} style={{width: 90, height: 90, borderRadius: 90/2}}/>
        <Text style={styles.badgeText}>{this.props.name}</Text>
        <Text style={styles.badgeSmText}>상품수 {util.currencyFormat(this.props.total)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  badge: {
    height: 140,
    paddingTop:20,
    justifyContent:'flex-start',
    flexDirection:'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    borderWidth: 0,
  },
  badgeText: {
    height: 27,
    color: '#212529',
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Noto Sans CJK KR Regular',
    letterSpacing: -0.2
  },
  badgeSmText: {
    height: 18,
    color: '#b0b8bf',
    fontSize: 12,
    fontFamily:'Noto Sans CJK KR Regular',
    fontWeight: '400'
  }
});

  
const mapStateToProps = state => ({
  store: state.store,
  hasError: state.getFetchError,
  isPending: state.getPending
});

const mapDispatchToProps= dispatch => ({
  fetchData: (url) => dispatch(findStore(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(Badge);
