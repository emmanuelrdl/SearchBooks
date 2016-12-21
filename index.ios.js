/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import Home from './Home';
import IndexBooks from './IndexBooks';
import ShowBook from './ShowBook'


class SearchBooks extends Component {


 renderScene(route, navigator) {
   if (route.name == 'Home' ){
     return <Home navigator={navigator} />
   }
   if (route.name == 'IndexBooks'){
     return <IndexBooks navigator={navigator} />
   }
   if (route.name == 'SearchBooks'){
     return <SearchBook navigator={navigator} />
   }
   if (route.name == 'ShowBook') {
     return <ShowBook navigator={navigator} {...route.passProps} />
   }

 }

  render() {
    return (
      <Navigator
        initialRoute={{ name: 'Home'}}
        renderScene={ this.renderScene }
      />
    )
  }
}

AppRegistry.registerComponent('SearchBooks', () => SearchBooks);


// <Home
//   title={route.title}
//
//   // Function to call when a new scene should be displayed
//   onForward={() => {
//     const nextIndex = route.index + 1;
//     navigator.push({
//       title: 'Scene ' + nextIndex,
//       index: nextIndex,
//     });
//   }}
//
// />
