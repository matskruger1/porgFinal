import React, { Component } from 'react';
import { card } from '../styles/harrystyles';

import { Text, View, Image } from "react-native";

export default class Card extends Component {

  render (){
    return (
        <View style={card.container}>
            <View style={card.card}>
                <Image style={card.image} source={{uri: this.props.image}}></Image>
                <View style={card.item}><Text>{this.props.name} {this.props.lastname}</Text></View> 
                <View style={card.item}><Text>{this.props.email}</Text></View>
                <View style={card.item}><Text>{this.props.age} años</Text></View>
            </View>
        </View>
  
  )}  

}