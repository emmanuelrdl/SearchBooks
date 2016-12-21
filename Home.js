import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight,  StyleSheet } from 'react-native';
import { styles } from './StyleSheet'

export default class Home extends Component {

 constructor(props){
   super(props)
 }

 _navigate() {
   this.props.navigator.push({
     name: 'IndexBooks'
   })
 }

  render() {
    return (
      <View style={styles.homeContainer}>
        <View  >
          <Text style={styles.h2, {marginBottom:100, marginTop:100}} > Welcome to SearchBooks App</Text>
          <TouchableHighlight onPress={ () => this._navigate() } style={styles.successButton}>
            <Text> Search a book</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}




Home.propTypes = {
  // title: PropTypes.string.isRequired,
  // onForward: PropTypes.func.isRequired,

};
