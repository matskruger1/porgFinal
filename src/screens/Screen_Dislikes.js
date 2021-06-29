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
            dislikes: []
        }
    }

    componentDidMount(){
      this.unsubscribe = this.props.navigation.addListener("focus",()=>{
        this.getObjectStorage()
      })
    };

    async filterDislikes(input) {
      let filter = this.state.dislikes.filter((dislike) => {
        if (dislike.name.first.toLowerCase().includes(input.toLowerCase())
        || dislike.name.last.toLowerCase().includes(input.toLowerCase())
        || dislike.location.country.toLowerCase().includes(input.toLowerCase())) {
          return dislike
        }
      })
 
      this.setState({dislikes: filter})
    }

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
      
        <View style={card.screenBotones} >
          <Text style ={card.title}> Papelera</Text>
        </View>
        
        <TouchableOpacity style={card.screenBotones}  onPress={this.eraseAll.bind(this)}>
          <Text style= {card.boton}>Eliminar todos definitivamente</Text>
        </TouchableOpacity>
        <View>
          <View>
            <TextInput onChangeText={value => this.filterDislikes(value)}></TextInput>
            </View>
        </View>
        <View>
          <FlatList
          data={this.state.dislikes}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          />
        </View>
      
       
      
  
    </View>
  
  
  )}  
}

export default Screen_Dislikes
