import React, { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Card from '../components/Card';
import { getData } from '../api/RandomUser';

import { View, ActivityIndicator, TouchableOpacity, Text, FlatList, TextInput } from "react-native";

export default class Screen extends Component {
  
constructor() {
  super();
  this.state = {
    pedido: "",
    contactosBackup: [],
    contactos: [],
    cantidad: " ",
    almacenar:[],
    activity: false,
  }
}  


getDataFromApi(q) {
  getData(q)
  .then((result)=> {
    this.setState({activity: true})
    this.setState({contactos: result, activity: false})
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

async storeData(value){
  
  try{

    this.state.almacenar.push(value)

    const jsonContacts = JSON.stringify(this.state.almacenar)
  
    await AsyncStorage.setItem("contactos", jsonContacts);

    let quantity = this.state.almacenar.length

    let eliminado = this.state.contactos.filter((contacto) => {
        return contacto.login.uuid !== value.login.uuid
    })

    this.setState({
      contactos: eliminado,
      cantidad: quantity,
    })
   
  } catch(e) {
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
            email={item.email}
            phone={item.phone}
            address={item.location.street.name} 
            number={item.location.street.number}
            registro={item.registered.date}
          

                      />

          <TouchableOpacity onPress={() => this.storeData(item)}><Text>Guardar</Text></TouchableOpacity>
        </View>
  
      )
    }
  

  render (){
    return (
    <View>
      
        { this.state.activity
        ? <ActivityIndicator
        color={"blue"}
        size={60}/>

        : <View>
          <FlatList
          data={this.state.contactos}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          />
          <View>
            <TextInput onChangeText={ value => this.setState({pedido: value})}></TextInput>
            <TouchableOpacity onPress = {() => this.getDataFromApi(this.state.pedido)}>
            <Text>Añadir</Text>
            </TouchableOpacity>
          </View>
          {/* acá va el alert con this.state.cantidad */}
          </View>
          
        }
      
  
    </View>
  
  
  )}  

}