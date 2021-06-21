import React, { Component } from 'react';
import Card from './Card';

import { FlatList, View, Text, TouchableOpacity } from "react-native";

export default class Container extends Component {
  
constructor(props) {
  super(props);
  this.state = {
      
  }
}   

renderItem = ({item}) => {
  return(
    
    <TouchableOpacity onPress={() => this.props.seleccionar(item)}>
      {/* esto no anda TODAVÍA porque hay un problema con el this.state.color */}
        
        <Card 
            name={item.name.first} 
            lastname={item.name.last} 
            id={item.login.uuid}
            email={item.email}
            age={item.dob.age}
            image={item.picture.thumbnail}
        />

      </TouchableOpacity>

    )
  }

  render () {

    return(
      <View>
        <FlatList
          data={this.props.contactos}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
        />
      </View>
    )
  }

}