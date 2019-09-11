/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet,Text,View,StatusBar} from "react-native";
import Barang from './Component/Barang'

class App extends Component {
  render(){
    return(
      <View>
        <Text>Task 2 React Native</Text>
        <Barang namabelanja="================ Total Belanja ================"/>
      </View>
    );
  }
}
export default App;
