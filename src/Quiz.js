import React, { useRef } from 'react';
import { Dimensions } from 'react-native';
import { ScrollView } from 'react-native';

import Perguntas from './Perguntas';


const screenHeight = Math.round(Dimensions.get('screen').height);
let thirdH = screenHeight / 3.8;

export default (props) => {
  const perguntaRef = useRef();

      return ( 
        <ScrollView
          ref={perguntaRef}
          showsVerticalScrollIndicator={false}
          decelerationRate="fast"
          snapToInterval={thirdH}
        >
         <Perguntas />
        </ScrollView>
    );
}