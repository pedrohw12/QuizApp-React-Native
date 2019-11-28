import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import Perguntas from './Perguntas';

export default class Quiz extends Component {
  render() {
      return ( 
        <ScrollView>
         <Perguntas />
        </ScrollView>
    );
  }
}