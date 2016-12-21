import {StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'powderblue'

  },

  successButton: {
    backgroundColor: 'lightcoral',
    padding:20,
    alignItems: 'center',
    borderRadius:5
  },

  globalBackground: {
    flex: 1,
    backgroundColor: 'powderblue'
  },

  toolbar: {
    backgroundColor:'coral',
    paddingTop:30,
    paddingBottom:10,
    flexDirection:'row',
  },

  textInput: {
    height:40,
    backgroundColor: 'white'
  },

  card: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 0.5,
    padding:5,
    flex: 1,
    flexDirection: 'row'

  },

  h2: {
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 10
  },

  imageContainer: {
    flex: 1,
    alignItems: 'stretch'
  },

  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

 cardWhite: {
   height: 150,
    fontSize: 10,
   backgroundColor: 'white'

 },

 justifiedTitles: {
   flexDirection: 'row',
   justifyContent: 'space-between',
   padding: 10
 }


});
