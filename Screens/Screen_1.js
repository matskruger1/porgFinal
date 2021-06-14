import React, {Component} from "react";
import { 

    View,
    Text,
    ScrollView,
    TextInput,
    TouchableOpacity,
    StatusBar
     }
    from 'react-native';
import {styles} from "../Styles/styles";

    export class Screen_1 extends component{
        render() {
            return (
            <View style={styles.container}>
                <Text styles={styles.title}>Screen 1</Text>
                <Text style={styles.texto}
                onPress = {() => this.props.navigator.navigate ("Screen_2")}> 
                 Go to Screen 2 </Text>

                 <Text style={styles.texto}
                onPress = {() => this.props.navigator.navigate ("Screen_import")}> 
                 Importar contactos </Text>
                 <Text style={styles.texto}
                onPress = {() => this.props.navigator.navigate ("Screen_ViewImportedCards")}> 
                 contactos importados </Text>
            <View styles = {styles.burguerContainer}>
                <TouchableOpacity onPress= {()=> this.props.navigate.openDrawer()}>
                    <View style= {styles.burguerButton}>
                   <Text style= {styles.burguerText}> =  </Text>
                   </View>
                </TouchableOpacity>
            </View>
            
            
            </View>
            )
        }
    }
    