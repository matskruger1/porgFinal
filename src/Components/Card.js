import React, { Component } from 'react';

import { Text, View, Image } from "react-native";

export default class Tarjeta extends Component {

  render (){
    return (
    <View>
      <View>
        <View><Text>{this.props.name} {this.props.lastname}</Text></View> 
        <View><Text>{this.props.mail}</Text></View>
        <View><Text>{this.props.age} años</Text></View>
      </View>
    </View>
  
  )}  

}