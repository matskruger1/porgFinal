import React, { Component } from 'react';
import { card } from '../styles/harrystyles';


import { Text, View, Image } from "react-native";

import moment from "moment"; 

export default class Card extends Component {

    constructor(props) {
        super(props);
        this.state = {
            birthdate: moment(this.props.birthdate). format("DD/MM/YYYY"), 
            registro: moment(this.props.registro).format("DD/MM/YYYY")
        }
    }

  render (){
    return (
        <View style={card.container}>
            <View style={card.card}>
                <Image style={card.image} source={{uri: this.props.image}}></Image>
                <View style={card.item}><Text>Nombre: {this.props.name} {this.props.lastname}</Text></View>
                <View style={card.item}><Text>Email: {this.props.email}</Text></View>
                <View style={card.item}><Text>{this.state.birthdate} - {this.props.age} años</Text></View>
                <View style={card.item}><Text>Tel: {this.props.phone} </Text></View>
                <View style={card.item}><Text>Direccion: {this.props.number} {this.props.address}</Text></View>
                <View style={card.item}><Text>Registrado:  {this.state.registro} </Text></View>
            </View>
        </View>
  
  )}  

}
// es la estructura de la tarjeta que vamos a visualizar en el componente del container

// el componente es la estructura padre de la tarjeta.

// En props es lo que me viene al componente, lo que le mande y lo que me vino .state está en el estado. En el estado aplicamos la librería moment para emprolijar el resultado de fechas en la tarjeta. Si yo quiero usar el formato que viene de props, me va a venir como estaba automáticamente preestablecido antes de usar la librería, es decir desprolijo. Ese props sigue existiendo, pero yo lo clone al aplicarle la librería y lo emprolije, pero en vez de llamarse . props ahora se llama .state. Sigue existiendo el otro pero solo quiero llamar al clonado emprolijado que se encuentra en .state