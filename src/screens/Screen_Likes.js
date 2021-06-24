import React, {Component} from "react";
import { render } from "react-dom";
import CardMini from '../components/CardMini';
import { 
    View,
    Text,
    FlatList,
    TouchableOpacity
  } from 'react-native';
import { card } from "../styles/harrystyles";
import AsyncStorage from "@react-native-async-storage/async-storage";

class Screen_Likes extends Component {
    constructor(){
        super();
        this.state={
            users:[],
            likes: [] // aca se guardan las tarjetas que habia likeado
        }
    }
   /*  creamos un constructor que va a tener un array de las tarjetas que he likeado en la pagina principal y un array
   que me va a seguir trayendo la informacion de cada usuario ??
 */


   componentDidMount(){
    this.unsubscribe = this.props.navigation.addListener("focus",()=>{
      this.getObjectStorage()
      /* lo que hacemos aca es registrar el evento cuando se monta el componente
      para que cada vez que tome foco se ejecute nuestra funcion   */

    })
  };



 /*  componentWillUnmount(){
    this.unsubscribe();
  } 
  Se deberia utilizar para dar de baja el evento para que luego de desmontar
  el componente no se invoque mas al evento */

   /* componentDidMount() {
    this.getObjectStorage()
    console.log(this.state.likes)
   } codigo original */

 /*  utilizo el componente did mount para que se renderize el objectstorage y se pueda utilizar.
 es un método que solo se ejecuta en el cliente y se produce inmediatamente después del primer 
 renderizado del componente. Una vez se ejecuta este método 
  , quedaran disponibles los elementos asociados al componente dentro del DOM.  */

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

   /* invocamos el metodo
    aca lo que estoy haciendo es que del async storage me devuelva la informacion que le pido de las trarjetas 
   Const jsonValue = await AsyncStorage.getItem (“@storage_key”)
Creamos la variable json value y esta va a esperar a que le de el item dependiendo de la clave que le enviemos,
Cuando geteamos / buscamos en el almacenamiento algo que yo tenga alamacenado bajo la llave con el nombre likes,
 el await retornara una promesa , un string o devuelve null , si devuelve null , lo que hago es diga que no existe la clave ,
  si jsonvalue no es nullo es que este dato contiene información y esta información yo la quiero convertir en un objeto.

Lo que vamos a tener que guardar localmente en el asyncstorage localmente no va a ser todo lo que viene del fetch 
, sino que seleccionar un conjunto. La idea es guardar los contactos en un arreglo local por medio del  async storage.
 SI apago el dispositivo cuando lo vuelvo a levantar el listado de contactos se mantiene en el dispositivo.
 
 Si almacenamos el objeto por medio de JSON.stringify, vamos a tener que recuperarlo por JSON.parse
 luego se va a invocar el evento setstate alacenando la informacion en el array de likes devolviendole el objeto alacenado.
Json.parse va a tratar de convertir el string obtenido en un objeto , este proceso puede fallar por lo tanto tenemos
 que preguntar si tuvo éxito o no.

 */
      
  
    keyExtractor = (item, idx) => idx.toString();
  renderItem = ({item}) => {
    return(

        <View>
            {/*  aca utilizamos el un componente parecido a card pero este este en mini para visualizar en esta
            pagina todas las tarjetas likeades que tenemos  */}
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
      
        <View  style={card.screenBotones} >
          <Text style ={card.title}>Personas Likeadas</Text>
        </View>
        {/* <TouchableOpacity style={card.screenBotones}  onPress={this.getObjectStorage.bind(this)}>
          <Text style= {card.boton}>Actualizar</Text>
        </TouchableOpacity> 
        si quiero utilizar el boton de actualizar*/}
        <View>
            <FlatList
            data={this.state.likes} // aca llamo a el arreglo con los items a visualizar
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItem}
            />
        </View>
      
  
    </View>
  
  
  )}  
}

export default Screen_Likes

