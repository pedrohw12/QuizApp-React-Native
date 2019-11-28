import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

import {Botao, Box} from './style';
import data from './data.json';
import style from './style';

//DISABLE YELLOW BOX
console.disableYellowBox = true;

const screenHeight = Math.round(Dimensions.get('window').height);
let thirdH = screenHeight / 4;

const screenWidth = Math.round(Dimensions.get('window').width);
let thirdW = screenWidth / 3;

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
         data.map((i, k)=> (
           <Box key={k} height={thirdH}>

            <Text> {i.pergunta} </Text>
            {i.opcoes.map(o=> 

            <View style={styles.respostaBox}>
              <Botao onPress={()=> this.handleClick()} width={thirdH} >
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
  perguntaBox: {
    alignItems: 'center',
    padding: 30,
    margin: 10,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: 'orange',
  },
  respostaBox: {
    flex: 1,
    marginTop: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  botao: {
    borderWidth: 1,
    borderRadius: 8,
    width: '45%',
    alignItems: 'center',
  }
});