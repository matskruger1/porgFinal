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
    dislikes:[],
    activity: false,
  }
}  


getDataFromApi() {
  getData(1)
  .then((result)=> {
    this.setState({activity: true})
    this.setState({show: result, activity: false})
  }) 
  
}

async componentDidMount(){
  await AsyncStorage.removeItem("contactos")

  try {
    let obtenerContactos = await AsyncStorage.getItem("contactos")
    obtenerContactos = JSON.parse(obtenerContactos)
  
    if(obtenerContactos !== null) {
        this.setState({ 
            almacenar: obtenerContactos,
        })
    }
  } catch(e) {
    console.log(e);
  }
  
}

async savePerson(item){
  try{
    await this.state.likes.push(item)
    this.getDataFromApi()
  } catch(e) {
    console.log(e)
  }
}

async deletePerson(item) {
  try {
    await this.state.dislikes.push(item)
    this.getDataFromApi()
  } catch (e) {
    console.log(e)
  }
}

  keyExtractor = (item, idx) => idx.toString();
  renderItem = ({item}) => {
    return(

        <View>
            
          <Card 
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

          <TouchableOpacity onPress={() => this.savePerson(item)}><Text style= {card.boton}>Guardar</Text></TouchableOpacity>

          <TouchableOpacity onPress={() => this.deletePerson(item)}><Text style= {card.boton}>Eliminar</Text></TouchableOpacity>

          <Text>{this.state.likes.length}</Text>
          <Text>{this.state.dislikes.length}</Text>

        </View>
  
      )
    }
  

  render (){
    return (
    <View>
      
        <View>
          <FlatList
          data={this.state.show}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          />
          <View>
            <TouchableOpacity onPress = {() => this.getDataFromApi()}>
              <Text style= {card.boton}>Añadir</Text>
            </TouchableOpacity>
          </View>
          </View>
          
        
      
  
    </View>
  
  
  )}  

}