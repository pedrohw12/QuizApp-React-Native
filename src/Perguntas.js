import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';

import {Botao, Box} from './style';
import data from './data.json';

//DISABLE YELLOW BOX
console.disableYellowBox = true;

const screenHeight = Math.round(Dimensions.get('window').height);
let thirdH = screenHeight / 4;

export default class Perguntas extends Component {
  
  render() {
      return ( 
         data.map((i, k)=> (
           <Box key={k} height={thirdH}>

            <Text> {i.pergunta} </Text>
            {i.opcoes.map(o=> 

            <View style={styles.respostaBox}>
              <Botao onPress={()=> alert('oi')} width={thirdH} >
                <Text> {o.opcao} </Text>
              </Botao>
            </View>
            )}

           </Box>
         ))
        
    );
  }
}
 
const styles = StyleSheet.create({
  respostaBox: {
    flex: 1,
    marginTop: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
});