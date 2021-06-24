import React, {Component} from "react";
import { render } from "react-dom";
import { View, Text } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class About extends Component {
    constructor(){
        super();
        this.state={}
    }

    render() {
        return (
            <View>
                <Text>Fermín Rodríguez del Castillo, Matías Kruger y Agnes Dormal</Text>
            </View>
        )

    }
}