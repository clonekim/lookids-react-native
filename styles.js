import { Platform, StyleSheet, StatusBar } from 'react-native';

export default StyleSheet.create({

  layout: {
    flex: 1,
    flexDirection: 'column',
    ...Platform.select({
      ios: {paddingTop: 20},
      android: {paddingTop: StatusBar.currentHeight}
    })
  },

  list: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 2,
    marginBottom: 3
  },

  contentSmBox: {
    flex:1,
    width:'100%',
    height: 17,
    borderWidth: 0,
    justifyContent: 'center',
    alignItems: 'center'    
  },

  contentBox: {
    flex: 1,
    width: '100%',
    justifyContent: 'center'
  },

  contentText: {
    color:'#343a40',
    fontSize: 13,
    fontWeight:'400'
  },
  
  contentHintText: {
    color: '#ff4f38',
    fontSize:9,
    fontWeight: '700'
  }

});
