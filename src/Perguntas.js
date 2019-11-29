import React, { Component } from 'react';
import { connect } from 'react-redux';
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

class Perguntas extends Component {
  handleClick = () => {
    // alert(this.o.opcao)
  }

  render() {
    // let opa = o.opcao;
    // console.log(opa);
      return ( 
         data.map((i, k)=> (
           <Box key={k} height={thirdH}>

            <Text> {i.pergunta} </Text>
            {i.opcoes.map(o=> 

            <View style={styles.respostaBox}>
              <Botao onPress={()=> this.props.setResposta('feito')} width={thirdH} >
                <Text> {o.opcao} </Text>
              </Botao>
            </View>
            )}
            
           </Box>
         ))
    );
  }
}

const mapStateToProps = (state) => {
  return {
    resposta:state.respostaReducer.resposta,
  };
};

const dispatchToProps = (dispatch) => {
  return {
    setResposta: (resposta)=> dispatch({type: 'SET_RESPOSTA', payload: {resposta}})
  };
};

export default connect(mapStateToProps, dispatchToProps)(Perguntas);
 
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