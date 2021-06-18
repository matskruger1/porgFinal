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

     class Screen_3 extends Component{
        constructor(props){
            super(props);
            this.state ={}
        }
        render() {
            return (
                <View style={styles.container}>
                <Text styles={styles.title}>Screen 3</Text>
                <Text styles={style.texto} >Valor: {this.props.route.params.valor}</Text>
               
                <Text styles={style.texto} onPress= {()=> this.props.navigation.navigate ("Screen_1")}>Go to Screen 1!</Text>
                <Text styles={style.texto} onPress= {()=> this.props.navigation.navigate ("Screen_2")}>Go Screen 2 </Text>

                <Text style={styles.texto}
                onPress = {() => this.props.navigator.navigate ("Screen_Import")}> 
                 Importar contactos </Text>
                 <Text style={styles.texto}
                onPress = {() => this.props.navigator.navigate ("Screen_ViewCards")}> 
                 contactos importados </Text> 
            </View>
            )
        }
    }
    export default Screen_3
