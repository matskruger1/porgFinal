import React, {Component} from "react";
import { render } from "react-dom";
import CardMini from '../components/CardMini';
import { 
    View,
    Text,
    FlatList,
    ScrollView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    StatusBar
     }
    from 'react-native';
import {card} from "../styles/harrystyles";
    import AsyncStorage from "@react-native-async-storage/async-storage";

class Screen_Dislikes extends Component {
    constructor(){
        super();
        this.state={
            users:[],
            dislikes: [] // aca deberiamos tener los que habia dislikeado
        }
    }

    componentDidMount(){
        this.getObjectStorage() 
    }
/* 
    posiblemente le tengamos que pasar el evento focu
    
    Si bien el ciclo de la vida de los componentes se respeta, tanto el componentDidMount como el componentDidUpdate 
    se ejecutan al inciarse el componente y al actualizarse sus estados respectivamente.
Pero puede que no se ejecuten al momento de pasar de una pantallas a otra debido a que el Navigator
 realizar un renderizado previo para hacer mas fluida la transición entre pantalla.
En caso de necesitar realizar una acción al ingresar a las pantallas ,
 como por ejemplo realizar un fetch o leer datos del AsyncStorage ,
 vamos a necesitar agregar un evento adicional cuando se haga foco en la pantallas.
El evento se llama focu y se debe registrar y dar de baja cuando el cómponente se monta y se desmonta respectivamente.

ComponentDidMount () {
This._unsubscribe = navigation.addListener (“focus”, () => {
// código a ejectuar al momento de ver la pantalla.
}),
Registramos el evento cuando se monta el componente , para que cada vez que tome foco se ejecute nuestra función anónima.
}
componentWillUnmount () {
this._unsubscribe (),
}
Damos de baja el evento para que luego de desmontar el componente no se invoque mas al evento.
*/

    async eraseAll() {
      await this.setState({dislikes: []})

      const disliked = JSON.stringify(this.state.dislikes)
      
      await AsyncStorage.setItem('@dislikes', disliked)
    }

    async getObjectStorage(){
        try {
            const jsonValue = await AsyncStorage.getItem('@dislikes')
            if (jsonValue !== null) {
                const jsonParsed = JSON.parse(jsonValue)
                this.setState({dislikes: jsonParsed})
            }
        } catch (e) {
            console.log(e)
        }
    }
    
    /*  aca lo que estoy haciendo es que del async storage me devuelva la informacion que le pido de las trarjetas 
   Const jsonValue = await AsyncStorage.getItem (“@storage_key”)
Creamos la variable json value y esta va a esperar a que le de el item dependiendo de la clave que le enviemos,
Cuando geteamos / buscamos en el almacenamiento algo que yo tenga alamacenado bajo la llave con el nombre dislikes,
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
            
          <CardMini
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
          <Text>Eliminados</Text>
        </View>
        <TouchableOpacity onPress={this.getObjectStorage.bind(this)}>
          <Text>Actualizar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.eraseAll.bind(this)}>
          <Text>Eliminar todos definitivamente</Text>
        </TouchableOpacity>
        <View>
          <FlatList
          data={this.state.dislikes} // aca si llamamo
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          />
        </View>
      
        {/* <View>
          <Text
          onPress= {()=> this.props.navigation.navigate("Screen_Likes")}>Ir a la pag de likes </Text>
          
          <Text
          onPress= {()=> this.props.navigation.navigate.push("Screen_Dislikes")}>Ir a la pag de dislikes </Text>
        </View> */}
      
  
    </View>
  
  
  )}  
}

export default Screen_Dislikes
/* 
todo esto lo quiero guardar en el async storage para 
que quede local en el dispositivo */

