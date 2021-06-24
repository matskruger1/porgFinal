import React, { Component } from 'react';
import { card } from '../styles/harrystyles';


import { Text, View, Image } from "react-native";

import moment from "moment"; 

export default class Card extends Component {

    constructor(props) {
        super(props);
        this.state = {
            birthdate: moment(this.props.birthdate).format("DD/MM/YYYY"),
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