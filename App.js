// import React, { Component } from 'react';
// import { Container, View, DeckSwiper, Card, CardItem, Text, Body, Button } from 'native-base';
// const cards = [
//   {
//     text: 'Jogo de perguntas 1'
//   },
// ];  
// export default class DeckSwiperAdvancedExample extends Component {
//   render() {
//     return (
//       <Container style={{flex: 1}}>
//         <View style={{backgroundColor: 'orange', flex:2, justifyContent: 'center', padding: 10}}>
//           <DeckSwiper
//             looping={false}
//             ref={(c) => this._deckSwiper = c}
//             dataSource={cards}
//             renderEmpty={() =>
//               <View style={{ alignSelf: "center"}}>
//                 <Text>FIM</Text>
//               </View>
//             }
//             renderItem={item =>
//               <Card style={{ elevation: 3, flex:1}}>
//                 <CardItem style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                  
//                     <Body style={{flex: 1,alignItems: 'center'}}>
//                       <Text>{item.text}</Text>
//                       <Text style={{marginTop: 10}} note>Obstrução do canal da uretra</Text>
//                     </Body>
                  
//                 </CardItem>
//                 <CardItem cardBody>
//                 </CardItem>
//                 <CardItem>
//                   <Text> {} </Text>
//                 </CardItem>
//               </Card>
//             }
//           />
//         </View>
//         <View style={{flex:1,backgroundColor: 'orange', flexDirection: 'row', justifyContent: 'space-around', marginTop: '-20%'}}>
//           <Button style={{borderRadius: 8}} onPress={() => [this._deckSwiper._root.swipeLeft(), alert('ESTAR')]}>
//             <Text>ESTAR</Text>
//           </Button>
//           <Button style={{borderRadius: 8}}  onPress={() => [this._deckSwiper._root.swipeRight(), alert('SER')]}>
//             <Text>SER</Text>
//           </Button>
//         </View>
//       </Container>
//     );
//   }
// }


import React, { Component } from 'react';
import Quiz  from './src/Quiz';
import {
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  View,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      quizFinish : false,
      score: 0
    }
  }
  _onPressBack(){
    const {goBack} = this.props.navigation
      goBack()
  }
  _quizFinish(score){    
    this.setState({ quizFinish: true, score : score })
  }
  _scoreMessage(score){
    if(score <= 30){
      return (<View style={styles.innerContainer} >
                <View style={{ flexDirection: "row"}} >
                  <Icon name="trophy" size={30} color="white" />
                </View>
                <Text style={styles.score}>You need to work hard</Text>
                <Text style={styles.score}>You scored {score}%</Text>
              </View>)
    }else if(score > 30 && score < 60){
      return (<View style={styles.innerContainer} >
                  <View style={{ flexDirection: "row"}} >
                    <Icon name="trophy" size={30} color="white" />
                    <Icon name="trophy" size={30} color="white" />
                  </View>
                  <Text style={styles.score}>You are good</Text>
                  <Text style={styles.score}>Congrats you scored {score}% </Text>
                </View>)
    }else if(score >= 60){
      return (<View style={styles.innerContainer}>
                 <View style={{ flexDirection: "row"}} >
                     <Icon name="trophy" size={30} color="white" />
                     <Icon name="trophy" size={30} color="white" />
                     <Icon name="trophy" size={30} color="white" />
                  </View>
                  <Text style={styles.score}>You are the master</Text>
                  <Text style={styles.score}>Congrats you scored {score}% </Text>
                </View>)
    }
  }
  render() {
    return (
      <View style={{flex:1}}>
      <StatusBar barStyle="light-content"/>
      <View style={styles.toolbar}>
                    <TouchableOpacity onPress={() => this._onPressBack() }><Text style={styles.toolbarButton}>Back</Text></TouchableOpacity>
                    <Text style={styles.toolbarTitle}></Text>
                    <Text style={styles.toolbarButton}></Text>
      </View>
 
       { this.state.quizFinish ? <View style={styles.container}>
           <View style={styles.circle}>
 
             { this._scoreMessage(this.state.score) }
           </View>
 
       </View> :  <Quiz quizFinish={(score) => this._quizFinish(score)} /> }
 
      </View>
    );
  }
}
const scoreCircleSize = 300
const styles = StyleSheet.create({
  score: {
    color: "white",
    fontSize: 20,
    fontStyle: 'italic'
  },
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: scoreCircleSize,
    height: scoreCircleSize,
    borderRadius: scoreCircleSize/2,
    backgroundColor: "green"
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  toolbar:{
        backgroundColor:'#00a8ff',
        paddingTop:30,
        paddingBottom:10,
        flexDirection:'row'
    },
    toolbarButton:{
        width: 55,
        color:'#fff',
        textAlign:'center'
    },
    toolbarTitle:{
        color:'#fff',
        textAlign:'center',
        fontWeight:'bold',
        flex:1
    }
});