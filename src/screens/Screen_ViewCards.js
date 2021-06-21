/* Todo este componente se va a utilizar para visualizar
los contactos que levante del async Storage, es un lugar 
al que podemos ir a buscar informacion 


en esta pagina visualizo los datos */
import AsyncStorage from "@react-native-async-storage/async-storage";
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

class Screen_ViewCards extends Component {
    constructor(){
        super();
        this.state = {
            importedUsers:[]
        }
    }



    async getData (){
        try {
            const resultado = await AsyncStorage.getItem("Users")
         /*    esto va al asyncstorage a la funcion getData y vamos a llamar a la key bajo al nombre que decidimos
         almacenar los datos*/
         // console.log (resultado)
        .this.state({importedUsers:JSON.parse(resultado)})
        }catch(e) {
            console.log(e)
        }
    }

    render(){
        const values = this.state.importedUsers.map (item =>
            /*  saber que hacia el .map */
         
            /*   explicar como funciona esta key */
             <Text  key ={item.login.uuid}
 
             style={{fontSize:20}}>
                 {item.name.text}</Text>) 
        return (
            <View>
            <Text > Mostramos los valores  importados</Text>
            {/* {values} * cambiar a flatlist/}
           {/*  este values es para que muestre la info que buscamos en la api? */}
         <TouchableOpacity  onPress ={this.storeData.bind(this) }>
             <View>
             <Text>Visualizar datos</Text>
             </View>
            
         </TouchableOpacity>
         <TouchableOpacity  onPress ={()=> this.setState({importedUsers:[]}) }>
             <View>
             <Text>Borrar datos importados</Text>
             </View>
            {/*  No entiendo como es que se borran de forma temporal aca  */}
            
         </TouchableOpacity>
        
        
        </View>
                 )
    }
}

export default Screen_ViewCards