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

/*  El método constructor es necesario para poder definir la estructura de un componente.
La función super en el constructor es necesaria en react ya que hereda de su clase padre.
El constructor es el único lugar donde debes asignar this.state directamente. Este va a ser un objeto literal.
adentro ponemos distintos arrays ya sea donde se van a guardar los likes , dislikes y las tarjetas que van a ser mostradas
 */

getDataFromApi() {
  getData(1)
  .then((result)=> {
    this.setState({activity: true})
    this.setState({show: result, activity: false})
  }) 
  
}

/* aca llamamos  al fetch que hemos realizado en la api para que nos retorne la informacion que esta nos trae
el getData le pongo propiedad 1 para que me traiga unicamente una tarjeta 
entender bien que setean estos states */

async componentDidMount(){ // ni idea
  // aca deberiamos de poner el focus para que se vuelva a renderizar cada screen cuando cargamos la info
}

async savePerson(item){
  try{
    await this.state.likes.push(item)
    const liked = JSON.stringify(this.state.likes)
    await AsyncStorage.setItem('@likes', liked)
    this.getDataFromApi()
  } catch(e) {
    console.log(e)
  }

   /* aca realizamos que las tarjetas que son likeadas sean guardadas en el async de likeos
   el primer await espera que me devuelva la promesa y una vez devuelta , me va a pushear una tarketa likeada.
  Vamos a tener almacenar y convertir el objeto, por medio de la función JSON.stringify
  el llamada a la función async esta devuelve un elemento promesa. El objeto promesa es usado para computaciones asincrónicas.
   Una promesa representa un valor que puede estar disponible ahora , en el futuro o nunca.
    Una función async puede contener una expresión await va a esperar el código a que esta promesa se resuelva 
    ( esta expresión pausa la ejecución de la función asincrónica y espera la resolución de la promesa),
     ya no son mas necesarios los then. Luego reanuda la ejecucion de la función async retorna el valor resuelto-
 Espera a que esto se ejecute para seguir ejecutando el programa con el setItem 
 (devuelve una promesa) se procesa utilizando async/await le vamos a pasar dos paramentros, clave y valor. 
 el llamado a la api porque se realiza desde aca para que me traiga la  info ?
   */

  

async deletePerson(item) {
  try {
    await this.state.dislikes.push(item)
    const disliked = JSON.stringify(this.state.dislikes)
    await AsyncStorage.setItem('@dislikes', disliked)
    this.getDataFromApi()
  } catch (e) {
    console.log(e)
  }
}

  /* aca realizamos que las tarjetas que son dislikeadas o borradas sean guardadas en el async de la papelera
  el primer await espera que nos devuelva una promesa y una vez resuelt va a pushear una tarjeta al array de tarjetas dislikeadas
  luego realizamos una variable en la cual se va a guardar  la info que es devuelta  porque vamos a tener que convertir el objeto en un string,
   por medio de la función JSON.stringify
   una vez transforado el objeto vamos a guardarlo en el asyncStorage con la clave dislike y el valor dislike
   una vez realizado todo esto (busca recien ahora la info de la api , la trae o como funciona )
   por si hay un error lo agarra para guardarlo o imprimirlo, nos va a permitir mostrárselo al usuario de forma elegante. Si el conjunto de instrucciones esta
    envuelto dentro del bloque Try da un error , automáticamente se va a ejecutar el bloque catch para que podamos manejar ese error.  */
   



// hacete tambien vos lo de la navegacion para ir a una pagina donde mostremos todos estos likes/dislikes con un flatlist y listo medio que terminamos

  keyExtractor = (item, idx) => idx.toString();
 /*  Va a recibir como parámetro el item o el id que cada vez que proceso un item el id empieza de 0 y se va a ir incrementando
  . En este caso utilizo un id y lo paso a un string porque requiere una cadena de caracteres. */
  renderItem = ({item}) => {
   /*  el item lo pongo entre llaves porque es un objeto y lo voy a
     procesar en la vista con los componentes y botones que  estoy procesando. */

  /*   el key extractor y el render item son propiedades obligatorias para realizar un flatlist */
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
          {/* componente card con cada uno de sus propiedades que son traidas */}

          <TouchableOpacity onPress={() => this.savePerson(item)}><Text style= {card.boton}>Guardar</Text></TouchableOpacity>

        {/*   ambos boton , el de guaradr y el de eliminar  */}

          <TouchableOpacity onPress={() => this.deletePerson(item)}><Text style= {card.boton}>Eliminar</Text></TouchableOpacity>

          <Text>{this.state.likes.length}</Text>
          {/* te devuelve el largo del array de likes y del de dislikes */}
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
         /* a data es el arreglo con los ítems a visualizar */
          keyExtractor={this.keyExtractor}
        /*  nos va a permitir generar la clave única para cada item a visualizar. Lo hace automáticamente. */
          renderItem={this.renderItem}
          /* como vamos a visualizar el item */
          />
          <View>
            <TouchableOpacity onPress = {() => this.getDataFromApi()}>
          {/*   El coponente que usaremos con mas frecuencia para capturar
             y responder a eventos táctiles. Este componente proporciona información visual simplemente 
             modificando la opacidad de todos sus elementos secundarios cuando se presiona. Se utiliza el evento
             onPress */}
              <Text style={card.boton}>Empezar</Text>
            </TouchableOpacity>
          {/*   no se que pasa aca  */}
          </View>
          </View>

          <View>
						<Text style={card.boton} onPress = {() => this.props.navigation.navigate("Screen_Likes")}>Ver guardados</Text>
					</View>
					<View>
						<Text style={card.boton} onPress = {() => this.props.navigation.navigate("Screen_Dislikes")}>Ver eliminados</Text>
					</View>
          
        {/* kruger fijate como hacer para que no arranque de cero */}
    

  
    </View>
  
  
  )}  

}