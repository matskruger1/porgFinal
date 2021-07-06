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
//El método constructor es necesario para poder definir la estructura de un componente.
//La función super en el constructor es necesaria en react ya que hereda de su clase padre.
//El constructor es el único lugar donde debes asignar this.state directamente. Este va a ser un objeto literal.
//adentro ponemos distintos arrays ya sea donde se van a guardar los likes , dislikes y las tarjetas que van a ser mostradas en 
//momento


// usamos una libreria llamada moment para las propiedades del registro del cliente y su birthdate. es para poder emprolijar la fecha que venia automatica de la propiedad del result de la API. La emprolijamos en this.state. A moment le tenes que pasar como parametro la fecha que te viene, haces el .format y le pones el formato que queres. en nuestro caso dos digitos para el dia y mes, y cuatro para el anio. 
// para llamarlo usamos this.state, si nosotros hariamos this.props nos traeria directamente la que venia de la API.


// En props es lo que me viene al componente, lo que le mande y lo que me vino, en cambio .state está en el estado. En el estado aplicamos la librería moment para emprolijar el resultado de fechas en la tarjeta. Si yo quiero usar el formato que viene de props, me va a venir como estaba automáticamente preestablecido antes de usar la librería, es decir desprolijo. Ese props sigue existiendo, pero yo lo clone al aplicarle la librería y lo emprolije, pero en vez de llamarse . props ahora se llama .state. Sigue existiendo el otro pero solo quiero llamar al clonado emprolijado que se encuentra en .state