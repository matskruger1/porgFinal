import React, { Component } from 'react';
import { card } from '../styles/harrystyles';


import { Text, View, Image } from "react-native";

import moment from "moment"; 

export default class CardMini extends Component {

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
            <View style={card.container}>
                <Image style={card.image} source={{uri: this.props.image}}></Image>
                <View style={card.item}><Text>{this.props.name} {this.props.lastname}</Text></View>
            </View>
        </View>
  
  )}  

}

//este componente contiene toda la estructura de las tarjetas que van a ser visualizadas en 
// los screens de likes y dislikes