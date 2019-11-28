import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Botao from './style';
import data from './data.json';

//DISABLE YELLOW BOX
console.disableYellowBox = true;

export default class Perguntas extends Component {
  state = {
    color: 'blue',
  };

  handleClick() {
    let a = JSON.stringify(data.map(i=>i.opcoes.map(o=>o.opcao)));
    alert(a)
    this.setState({color: 'red'})
  }
  
  render() {
      return ( 
         data.map(i=> (
           <View style={styles.perguntaBox}>

            <Text> {i.pergunta} </Text>
            {i.opcoes.map(o=> 

            <View style={styles.respostaBox}>
              <Botao onPress={()=> this.handleClick()} >
                <Text> {o.opcao} </Text>
              </Botao>
            </View>
            )}

           </View>
         ))
        
    );
  }
}
 
const styles = StyleSheet.create({
  perguntaBox: {
    alignItems: 'center',
    padding: 30,
    margin: 10,
    borderWidth: 1,
    borderRadius: 8
  },
  respostaBox: {
    marginTop: 10,
    padding: 10,
    justifyContent: 'space-between',
    flexDirection: 'row'
  }
});