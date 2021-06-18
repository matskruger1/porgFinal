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

     class Screen_2 extends Component{
        render() {
            return (
                <View style={styles.container}>
                <Text styles={styles.title}>Screen 2</Text>
                <Text styles={style.texto} onPress= {()=> this.props.navigation.goBack ()}>Go back!</Text>
                <Text styles={style.texto} onPress= {()=> this.props.navigation.navigate ("Screen_1")}>Go to Screen 1!</Text>
                <Text styles={style.texto} onPress= {()=> this.props.navigation.push ("Screen_2")}>Go Screen 2 Agai n</Text>
              {/*   Por medio del metodo push podemos navegar nuevamente sobre la misma pagina */}
                <Text styles={style.texto} onPress= {()=> this.props.navigation.navigate ("Screen_3", {valor:123})}>Go Screen 3</Text>
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

    export default Screen_2