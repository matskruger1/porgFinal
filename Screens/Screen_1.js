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

    class Screen_1 extends Component{
        render() {
            return (
            <View style={styles.container}>
                <Text styles={styles.title}>Screen 1</Text>
                <Text style={styles.texto}
                onPress = {() => this.props.navigator.navigate ("Screen_2")}> 
                 Go to Screen 2 </Text>

                 <Text style={styles.texto}
                onPress = {() => this.props.navigator.navigate ("Screen_Import")}> 
                 Importar contactos </Text>
                 <Text style={styles.texto}
                onPress = {() => this.props.navigator.navigate ("Screen_ViewCards")}> 
                 contactos importados </Text> 
          {/*   <View styles = {styles.burguerContainer}>
                <TouchableOpacity onPress= {()=> this.props.navigate.openDrawer()}>
                    <View style= {styles.burguerButton}>
                   <Text style= {styles.burguerText}> =  </Text>
                   </View>
                </TouchableOpacity>
            </View> */}
            
            
            </View>
            )
        }
    }
    export default Screen_1
    