import React, {Component} from "react";
import { render } from "react-dom";
import { View, Text } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { card } from "../styles/harrystyles";

export default class About extends Component {
    constructor(){
        super();
        this.state={}
    }

    render() {
        return (
            <View  style={card.screenBotones}>
                <Text>Fermín Rodríguez del Castillo, Matías Kruger y Agnes Dormal</Text>
            </View>
        )

    }
}