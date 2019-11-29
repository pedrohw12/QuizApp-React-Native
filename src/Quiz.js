import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dimensions } from 'react-native';
import { ScrollView, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo'
import data from './data.json';

import Perguntas from './Perguntas';

const screenHeight = Math.round(Dimensions.get('screen').height);
let thirdH = screenHeight / 3.8;
let correr = 60;
let next = correr + correr;

const respostas = [
  {id: 1, alternativa: this.props.resposta }
];

class Quiz extends Component {
  handleScroll = () => {
    this.ListView_Ref.scrollTo({y: correr = correr + next  , animated:true}); 
  }

  render() { console.log(this.props.resposta)
    return ( 
      <View style={{backgroundColor: 'white', height: '75%'}}>
        <Icon name="arrow-up" size={50} style={{position: 'absolute', marginLeft: '42%', marginTop: '15%'}} />
        <ScrollView
          ref={(ref)=>{ this.ListView_Ref = ref}}
          showsVerticalScrollIndicator={false}
          decelerationRate="fast"
          snapToInterval={thirdH}
          contentContainerStyle={{paddingTop:thirdH, paddingBottom: thirdH}}
        >
        <Perguntas />
        </ScrollView>
        {respostas[0].alternativa === this.props.resposta && 
        <TouchableOpacity style={styles.btn} onPress={()=>this.handleScroll()}>
          <Text style={{fontWeight: 'bold'}}> Próxima </Text>
        </TouchableOpacity>
        }
        {respostas[0].alternativa !== this.props.resposta &&
        <TouchableOpacity style={styles.btnError} onPress={()=>{}}>
          <Text style={{fontWeight: 'bold'}}> Próxima </Text>
        </TouchableOpacity>
        }
      </View>
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

export default connect(mapStateToProps, dispatchToProps)(Quiz);
// export default Quiz;

const styles = StyleSheet.create({
  respostaBox: {
    flex: 1,
    marginTop: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  btn: {
    backgroundColor: '#00a8ff',
    height: '23.5%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginHorizontal: 10
  },
  btnError: {
    backgroundColor: 'red',
    height: '23.5%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginHorizontal: 10
  },
});