import React, { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Card from '../components/Card';
import { getData } from '../api/RandomUser';
import { card } from '../styles/harrystyles';


import { View, ActivityIndicator, TouchableOpacity, Text, FlatList, TextInput,Image } from "react-native";

export default class Screen extends Component {
  
constructor() {
  super();
  this.state = {
    show: [],
    likes:[],
    dislikes:[]
  }
}  

/*  El método constructor es necesario para poder definir la estructura de un componente.
La función super en el constructor es necesaria en react ya que hereda de su clase padre.
El constructor es el único lugar donde debes asignar this.state directamente. Este va a ser un objeto literal.
adentro ponemos distintos arrays ya sea donde se van a guardar los likes , dislikes y las tarjetas que van a ser mostradas en 
momento
 */

getDataFromApi() {
  getData(1)
  .then((result)=> {
    this.setState({show: result})
  }) 
  
}

/* aca llamamos  al fetch que hemos realizado en la api para que nos retorne la informacion que esta nos trae
el getData le pongo propiedad 1 para que me traiga unicamente una tarjeta . Luego realizo un then con el evento setState
para que los resultados de la api sean guaradados en el array de show */

async componentDidMount(){ // ni idea
  this.getDataFromApi();
  /*  utilizamos el llamado a la api para que se renderize en el cliente. es un método que solo se ejecuta en el cliente y 
  se produce inmediatamente después del primer renderizado del componente. Una vez se ejecuta este método 
  , quedaran disponibles los elementos asociados al componente dentro del DOM. 
Si quisiéramos hacer un llamado asincrónico , este seria el método en el que deberíamos definirlo.
 Este es el momento donde podeos hacer un pedido mediante API.
*/
}

async savePerson(item){ //creamos el componente ? o metodo ?
  try{
    const jsonValue = await AsyncStorage.getItem('@likes')

    if (jsonValue !== null) {
        const jsonParsed = JSON.parse(jsonValue)
        this.setState({likes: jsonParsed})
    }

    console.log(this.state.likes.length) //muestra el largo del array de las tarjetas guardadas en likes

     /*  aca lo que estoy haciendo es que del async storage me devuelva la informacion que le pido de las trarjetas 
    Const jsonValue = await AsyncStorage.getItem (“likes). Creamos la variable json value y esta va a esperar
     a que le de el item dependiendo de la clave que le enviemos,
 Cuando geteamos / buscamos en el almacenamiento algo que yo tenga alamacenado bajo la llave con el nombre likes,
  el await retornara una promesa , un string o devuelve null , si devuelve null , lo que hago es diga que no existe la clave ,
   si jsonvalue no es nullo es que este dato contiene información y esta información yo la quiero convertir en un objeto.
 
 Lo que vamos a tener que guardar localmente en el asyncstorage localmente no va a ser todo lo que viene del fetch 
 , sino que seleccionar un conjunto. La idea es guardar los contactos en un arreglo local por medio del async storage.
  SI apago el dispositivo cuando lo vuelvo a levantar el listado de contactos se mantiene en el dispositivo.
  
  Si almacenamos el objeto por medio de JSON.stringify, vamos a tener que recuperarlo por JSON.parse
 Json.parse va a tratar de convertir el string obtenido en un objeto , este proceso puede fallar por lo tanto
  tenemos que preguntar si tuvo éxito o no. */
 

    await this.state.likes.push(item) // guarda en el array de likes la tarjeta que seleccionamos

    console.log(this.state.likes.length)

    const liked = JSON.stringify(this.state.likes)

    await AsyncStorage.setItem('@likes', liked) // guarda el array en el coso (lo actualiza)

    this.getDataFromApi() // llamo de vuelta a la api para que me traiga otra tarjeta nuevamente
  } catch(e) {
    console.log(e)
  }
}

   /* aca realizamos que las tarjetas que son dislikeadas o borradas sean guardadas en el async de la papelera
  el primer await espera que nos devuelva una promesa y una vez resuelt va a pushear una tarjeta al array de tarjetas dislikeadas
  luego realizamos una variable en la cual se va a guardar  la info que es devuelta en forma de string porque convertimos el
  objeto json por medio de la función JSON.stringify
   una vez transforado el objeto vamos a guardarlo en el asyncStorage con la clave likes y el valor likes
   una vez realizado todo esto  llamo devuelta a la api para que me traiga otra tarjeta nuevamente
   por si hay un error lo agarra para guardarlo o imprimirlo, nos va a permitir mostrárselo al usuario de forma elegante. Si el conjunto de instrucciones esta
    envuelto dentro del bloque Try da un error , automáticamente se va a ejecutar el bloque catch para que podamos manejar ese error.  */
   



  

async deletePerson(item) { // exactamente lo mismo que el save pero en otro array
  try {
    const jsonValue = await AsyncStorage.getItem('@dislikes')

    if (jsonValue !== null) {
      const jsonParsed = JSON.parse(jsonValue)
      this.setState({dislikes: jsonParsed})
    }

   /*  aca lo que estoy haciendo es que del async storage me devuelva la informacion que le pido de las trarjetas 
    Const jsonValue = await AsyncStorage.getItem (“dislikes).Creamos la variable json value y esta va a esperar
     a que le de el item dependiendo de la clave que le enviemos,
 Cuando geteamos / buscamos en el almacenamiento algo que yo tenga alamacenado bajo la llave con el nombre likes,
  el await retornara una promesa , un string o devuelve null , si devuelve null , lo que hago es diga que no existe la clave ,
   si jsonvalue no es nullo es que este dato contiene información y esta información yo la quiero convertir en un objeto.
 
 Lo que vamos a tener que guardar localmente en el asyncstorage localmente no va a ser todo lo que viene del fetch 
 , sino que seleccionar un conjunto. La idea es guardar los contactos en un arreglo local por medio del async storage.
  SI apago el dispositivo cuando lo vuelvo a levantar el listado de contactos se mantiene en el dispositivo.
  
  Si almacenamos el objeto por medio de JSON.stringify, vamos a tener que recuperarlo por JSON.parse
 Json.parse va a tratar de convertir el string obtenido en un objeto , este proceso puede fallar por lo tanto tenemos que preguntar si tuvo éxito o no. */
 

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
  luego realizamos una variable en la cual se va a guardar  la info que es devuelta en forma de string porque convertimos el
  objeto json por medio de la función JSON.stringify
   una vez transforado el objeto vamos a guardarlo en el asyncStorage con la clave dislike y el valor dislike
   una vez realizado todo esto  llamo devuelta a la api para que me traiga otra tarjeta nuevamente
   por si hay un error lo agarra para guardarlo o imprimirlo, nos va a permitir mostrárselo al usuario de forma elegante. Si el conjunto de instrucciones esta
    envuelto dentro del bloque Try da un error , automáticamente se va a ejecutar el bloque catch para que podamos manejar ese error.  */
   




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

          <TouchableOpacity onPress={() => this.savePerson(item) }><Text style= {card.boton}>Guardar</Text></TouchableOpacity>

        {/*   ambos boton , el de guaradr y el de eliminar el parametro item de que sirve ?  */}

          <TouchableOpacity onPress={() => this.deletePerson(item)}><Text style= {card.boton}>Eliminar</Text></TouchableOpacity>

        </View>
  
      )
    }
  



  render (){
    return (
    <View>
        <View  style={card.screenBotones} >
          <Text style ={card.title}>Comenza!</Text>
        </View>
        <View style ={card.screenBotones} >
          <FlatList
          data={this.state.show}
         /* data es el arreglo con los ítems a visualizar */
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
             onPress. Este boton cuando lo tocamos  nos va a traer la informacion de la api y al tocar el boton
             nos va a traer nuevamente la info. Como digo que me la randomiza ?*/}
              <Text style={card.boton}>Pasar</Text>
            </TouchableOpacity>
          </View>

          <View style={card.burguerContainer}>          
            <TouchableOpacity onPress= {()=> this.props.navigation.openDrawer()}>
            <View style={card.burguerBotton} >
              <Image style={{width:60, height:60}} source={require("../img/menu.png")}/>
              <Text style={card.burguerText}>=</Text>
              </View>
            </TouchableOpacity>
            </View>


         

          </View>
         
      
      
    

  
    </View>
  
  
  )}  

}