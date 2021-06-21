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

class Screen_Import extends Component {
    constructor(){
        super();
        this.state={
            users:[]
        }
    }

    componentDidMount(){
        fetch('https://randomuser.me/api?results=20')
        .then (response => response.json ())
        .then ((result)=> {
            this.setState({user:result.results}); 
           /*  saber bien que hacen estos then y como comvierten el objeto literal en json */
    
    })
       
    }

    async storeData (){
        try {
            const jsonUsers = Json.stringify(this.state.users)
          await AsyncStorage.setItem ("users",jsonUsers); 
         /*  al guardarolo en el AsyncStorage esto recibe una key y un value / value es lo que vos queres almacenar
         y la key es bajo que nombre se va a guardar */
          console.log("Datos alacenados")
    }catch (e) {
    Console.error(e);
    }
      
    }
   /*  saber exactamente como el async guarda los datos localmente 
    debido a que async guarda todo como string , por lo cual el json 
    deber reconvertirlo  */

    render(){
        const values = this.state.users.map (item =>
           /*  saber que hacia el .map */
        
           /*   explicar como funciona esta key */
            <Text  key ={item.login.uuid}

            style={{fontSize:20}}>
                {item.name.text}</Text>)
        return ( 
            <View>
                <Text > Mostramos las tarjetas del fecth para importar</Text>
                {values}
               {/*  este values es para que muestre la info que buscamos en la api? */}
             <TouchableOpacity  onPress ={this.storeData.bind(this) }>
                 <View>
                 <Text>Guardar datos</Text>
                 </View>
                
             </TouchableOpacity>
            
            </View>
                 )
    }
}

export default Screen_Import
/* 
todo esto lo quiero guardar en el async storage para 
que quede local en el dispositivo */

