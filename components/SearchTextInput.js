import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';


const CloseButton = (props) => {
  if(props.keyword.trim().length > 0) {
    return (
      <TouchableOpacity onPress={props.clearHandler}>
        <Image source={require('../assets/close.png')} style={{height:16, width:16}} />
      </TouchableOpacity>
    );
  } else {
    return null;
  }
};


export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword:''
    };
  }

  clearHandler() {
    this.setState({keyword: ''});
    this.props.updateText('');
  }

  updateText(text) {
    this.setState({keyword: text});
    this.props.updateText(text);
  }

  
  render(){
  
    return (
      <View style={{height:50, backgroundColor: '#e6eaed', padding: 4, flexDirection:'row'}}>
        <View style={{flex:1, backgroundColor:'#fff', flexDirection:'row'}}>

          <View style={{alignItems:'center', justifyContent:'center', paddingLeft:16, paddingRight:27}}>
            <TouchableOpacity onPress={()=> this.props.navigation.goBack()}>
              <Image source={require('../assets/arrow-left.png')} style={{height:17, width:18}} />
            </TouchableOpacity>
          </View>

          <View style={{flex:1, alignItem:'stretch', justifyContent:'center'}}>
            <TextInput style={{backgroundColor:'#fff', fontSize:14}} maxLength={25}  autoFocus={true}  value={this.state.keyword}  onChangeText={(keyword) => this.updateText(keyword)}/>
          </View>

          <View style={{alignItems:'flex-end', justifyContent:'center', paddingLeft:10, paddingRight:22}}>
            <CloseButton keyword={this.state.keyword} clearHandler={this.clearHandler.bind(this)} />
          </View>

        </View>
      </View>
    );
  }
}
