import React, { useRef } from 'react';
import { Dimensions } from 'react-native';
import { ScrollView, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo'

import Perguntas from './Perguntas';


const screenHeight = Math.round(Dimensions.get('screen').height);
let thirdH = screenHeight / 3.8;

export default (props) => {
  const perguntaRef = useRef();

      return ( 
        <View style={{backgroundColor: 'red', height: '75%', zIndex: 2}}>
          <Icon name="arrow-up" size={50} style={{position: 'absolute', marginLeft: '42%', marginTop: '15%'}} />
          <ScrollView
            style={{zIndex: 1}}
            ref={perguntaRef}
            showsVerticalScrollIndicator={false}
            decelerationRate="fast"
            snapToInterval={thirdH}
            contentContainerStyle={{paddingTop:thirdH, paddingBottom: thirdH}}
          >
          <Perguntas />
          </ScrollView>
        </View>
    );
}