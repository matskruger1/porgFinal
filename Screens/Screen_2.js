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

    export class Screen_2 extends component{
        render() {
            return (
                <View style={styles.container}>
                <Text styles={styles.title}>Screen 2</Text>
                <Text styles={style.texto} onPress= {()=> this.props.navigation.goBack ()}>Go back!</Text>
                <Text styles={style.texto} onPress= {()=> this.props.navigation.navigate ("Screen_1")}>Go to Screen 1!</Text>
                <Text styles={style.texto} onPress= {()=> this.props.navigation.push ("Screen_2")}>Go Screen 2 Agai n</Text>
                <Text styles={style.texto} onPress= {()=> this.props.navigation.navigate ("Screen_3", {valor:123})}>Go Screen 3</Text>
            </View>
            )
        }
    }
