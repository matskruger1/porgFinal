import React, {Component} from "react";
import { render } from "react-dom";
import { 

    View,
    Text,
    ScrollView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    StatusBar
     }
    from 'react-native';
    import {styles} from "../styles/harrystyles";
    import AsyncStorage from "@react-native-async-storage/async-storage";

class Screen_Likes extends Component {
    constructor(){
        super();
        this.state={
            users:[],
            likes: [] // aca deberiamos tener los que habia likeado
        }
    }
   /*  creamos un constructor que va a tener un array de las tarjetas que he likeado en la pagina principal y un array
   que me va a seguir trayendo la informacion de cada usuario ??
 */
    componentDidMount(){
        this.getObjectStorage() 
    }

    async getObjectStorage(){
        try {
            const jsonValue = await AsyncStorage.getItem('@likes')
            if (jsonValue !== null) {
                const jsonParsed = JSON.parse(jsonValue)
                this.setState({likes: jsonParsed})
            }
        } catch (e) {
            console.log(e)
        }
    }

   /*  aca lo que estoy haciendo es que del async storage me devuelva la informacion que le pido de las trarjetas 
   Const jsonValue = await AsyncStorage.getItem (“@storage_key”)
Creamos la variable json value y esta va a esperar a que le de el item dependiendo de la clave que le enviemos,
Cuando geteamos / buscamos en el almacenamiento algo que yo tenga alamacenado bajo la llave con el nombre likes,
 el await retornara una promesa , un string o devuelve null , si devuelve null , lo que hago es diga que no existe la clave ,
  si jsonvalue no es nullo es que este dato contiene información y esta información yo la quiero convertir en un objeto.

Lo que vamos a tener que guardar localmente en el asyncstorage localmente no va a ser todo lo que viene del fetch 
, sino que seleccionar un conjunto. La idea es guardar los contactos en un arreglo local por medio del async storage.
 SI apago el dispositivo cuando lo vuelvo a levantar el listado de contactos se mantiene en el dispositivo.
 
 Si almacenamos el objeto por medio de JSON.stringify, vamos a tener que recuperarlo por JSON.parse
Json.parse va a tratar de convertir el string obtenido en un objeto , este proceso puede fallar por lo tanto tenemos que preguntar si tuvo éxito o no.

 */
      
  
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
            birthdate={item.dob.date}
            email={item.email}
            phone={item.phone}
            address={item.location.street.name} 
            number={item.location.street.number}
            registro={item.registered.date}
          />

        </View>
  
      )
    }
  

  render (){
    return (
    <View>
      
        <View>
          <FlatList
          data={this.state.likes} // aca si llamamo
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          />
        </View>

        {/* navegacion de pag a pagina */}
        <View style= {style.container}>
          <Text style = {style.text}
          onPress= {()=> this.props.navigation.navigate("Screen_Dislikes")}>Ir a la pag de dislikes </Text>
          
          <Text style = {style.text}
          onPress= {()=> this.props.navigation.navigate.push("Screen_Likes")}>Ir a la pag de dislikes </Text>
        </View>
      
  
    </View>
  
  
  )}  
}

export default Screen_Likes

