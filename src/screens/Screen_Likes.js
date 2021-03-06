import React, {Component} from "react";
import { render } from "react-dom";
import CardMini from '../components/CardMini';
import { 
    View,
    Text,
    FlatList,
    TextInput,
    TouchableOpacity,
  } from 'react-native';
import { card } from "../styles/harrystyles";
import AsyncStorage from "@react-native-async-storage/async-storage";

class Screen_Likes extends Component {
    constructor(){
        super();
        this.state={
            users:[],
            likes: []
        }
    }


   componentDidMount(){
    this.unsubscribe = this.props.navigation.addListener("focus",()=>{
      this.getObjectStorage()

    })
  };

   async filterLikes(input) {
     let filter = this.state.likes.filter((like) => {
       if (like.name.first.toLowerCase().includes(input.toLowerCase())
       || like.name.last.toLowerCase().includes(input.toLowerCase())
       || like.location.country.toLowerCase().includes(input.toLowerCase())) {
         return like
       }
     })

     this.setState({likes: filter})
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
        <View style={{marginBottom: 10}}>
          <View>
            <Text style={card.input}>Buscar</Text>
            <TextInput style={card.input} onChangeText={value => this.filterLikes(value)}></TextInput>
            </View>
        </View>
        <View style={{marginTop: 10}}>
            <FlatList
            data={this.state.likes}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItem}
            />
        </View>
      
  
    </View>
  
  
  )}  
}

export default Screen_Likes

