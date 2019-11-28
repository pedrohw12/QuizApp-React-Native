import React, { Component } from 'react';
import Quiz  from './src/Quiz';
import {
  StyleSheet,
  View,
} from 'react-native';
export default class App extends Component {
  render() {
    return (
      <View style={{height: '40%', borderColor: 'red'}}>
        <View style={styles.toolbar}>        
        </View>
        <Quiz /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  toolbar:{
    backgroundColor:'#00a8ff',
    paddingTop:30,
    paddingBottom:10,
    height: 60
  },
});