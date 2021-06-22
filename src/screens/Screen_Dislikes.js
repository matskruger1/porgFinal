/* El objetivo de esto es que si hacemos un componente Card 
esta misma la utilizaremos en todos lados, tanto en la pantalla del import 
o view cards o la del tacho de basura .
Todo el trabajo que haciamos sobre la tarjeta ahora la accion la 
vas a realizar en la pantalla
El fectch de la api solo se realiza una vez en el import, lo que si vamos a tener
que repetir muchas veces el async storage


en esta pagina se importan los datos y los guardo*/
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
    import {styles} from "../Styles/styles";
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
    
   /*  saber exactamente como el async guarda los datos localmente 
    debido a que async guarda todo como string , por lo cual el json 
    deber reconvertirlo  */

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
          data={this.state.dislikes} // aca si llamamo
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          />
        </View>
      
  
    </View>
  
  
  )}  
}

export default Screen_Dislikes
/* 
todo esto lo quiero guardar en el async storage para 
que quede local en el dispositivo */

