import "react-native-gesture-handler";
import React, {Component} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { 
    View,
    Text,
    ScrollView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
     }
    from 'react-native';

import  Screen_1 from "./Screens/Screen_1";
import  Screen_2 from "./Screens/Screen_2";
import  Screen_3 from "./Screens/Screen_3";
import Screen_ViewCards from "./Screens/Screen_ViewCards"
import Screen_Import from "./Screens/Screen_Import"




const Drawer = createDrawerNavigator ();

class App extends Component {
  render() {
    return (
      <NavigationContainer>     
      <Drawer.Navigator initialRouteName= "Screen_Import"
      edgeWidth={100}
      drawerPosition = "left"
      drawerType = "slide"
      overlayColor= "#4444ff"
      drawerStyle={{
        backgroundColor:"#aaaa99",
        width:250

      }}
      drawerContentOptions={{
        activeTintColor:"white",
        activeBackgroundColor:"blue",
        inactiveTintColor:"black",
        inactiveBackgroundColor:"orange",
        itemStyle:{borderRadius:100, borderWidth:3},
        
      }}
      >
        <Drawer.Screen name="Screen 1" component= {Screen_1} options ={{title:"Menu"}}/>
        <Drawer.Screen name="Screen View" component= {Screen_ViewCards} options ={{title:"Menu"}}/>
        <Drawer.Screen name="Screen 2 " component= {Screen_2} options ={{title:"importar"}}/>
        <Drawer.Screen name="Screen Import" component= {Screen_Import} options ={{title:"Contactos importados"}}/>
        <Drawer.Screen name="Screen 3 " component= {Screen_3} initialParams = {{valor: 0}}/>
      </Drawer.Navigator>

      </NavigationContainer>

    )
  }
}

export default App
