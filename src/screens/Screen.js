import React, { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Card from '../components/Card';
import { getData } from '../api/RandomUser';
import { card } from '../styles/harrystyles';


import { View, ActivityIndicator, TouchableOpacity, Text, FlatList, TextInput } from "react-native";

export default class Screen extends Component {
  
constructor() {
  super();
  this.state = {
    show: [],
    likes:[],
    dislikes:[]
  }
}

getDataFromApi() {
  getData(1)
  .then((result)=> {
    this.setState({show: result})
  }) 
  
}

async componentDidMount(){
  this.getDataFromApi();
}

async savePerson(item){
  try{
    const jsonValue = await AsyncStorage.getItem('@likes')

    if (jsonValue !== null) {
        const jsonParsed = JSON.parse(jsonValue)
        this.setState({likes: jsonParsed})
    }

    console.log(this.state.likes.length)

    await this.state.likes.push(item)

    console.log(this.state.likes.length)

    const liked = JSON.stringify(this.state.likes)

    await AsyncStorage.setItem('@likes', liked)

    this.getDataFromApi() 
  } catch(e) {
    console.log(e)
  }
}
   


async deletePerson(item) {
  try {
    const jsonValue = await AsyncStorage.getItem('@dislikes')

    if (jsonValue !== null) {
      const jsonParsed = JSON.parse(jsonValue)
      this.setState({dislikes: jsonParsed})
    } 

    await this.state.dislikes.push(item)

    const disliked = JSON.stringify(this.state.dislikes)

    await AsyncStorage.setItem('@dislikes', disliked)
    this.getDataFromApi()
  } catch (e) {
    console.log(e)
  }
}
   

  keyExtractor = (item, idx) => idx.toString();
  renderItem = ({item}) => {
    return(

        <View>
            
          <Card style ={card.screenBotones}
            name={item.name.first} 
            lastname={item.name.last} 
            id={item.login.uuid} 
            image={item.picture.thumbnail} 
            age={item.dob.age}
            birthdate={item.dob.date}
            email={item.email}
            phone={item.phone}
            address={item.location.street.name} 
            number={item.location.street.number}
            registro={item.registered.date}
          />

          <TouchableOpacity onPress={() => this.savePerson(item) }><Text style= {card.boton}>Guardar</Text></TouchableOpacity>

          <TouchableOpacity onPress={() => this.deletePerson(item)}><Text style= {card.boton}>Eliminar</Text></TouchableOpacity>

        </View>
  
      )
    }
  



  render (){
    return (
    <View>
        <View >
          <FlatList
          data={this.state.show}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          />
          <View>

            <TouchableOpacity onPress = {() => this.getDataFromApi()}>
              <Text style={card.boton}>Pasar</Text>
            </TouchableOpacity>
          </View>
          </View>

    </View>
  
  
  )}  

}