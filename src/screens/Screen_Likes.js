
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
/* 
todo esto lo quiero guardar en el async storage para 
que quede local en el dispositivo */

