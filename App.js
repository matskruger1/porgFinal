import "react-native-gesture-handler";
import React, {Component} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { 
    View,
    Text,
    ScrollView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
     }
    from 'react-native';

import { Screen_1} from "./Screens/Screen_1";
import { Screen_2} from "./Screens/Screen_2";
import { Screen_3} from "./Screens/Screen_3";




const Drawer = createDrawerNavigator ();

class App extends Component {
  render() {
    return (
      <NavigationContainer>     
      <Drawer.Navigator initialRouteName= "Screen_Import"
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
        <Drawer.Screen name="Screen 1" component = {Screen_1} options ={{title:"Menu"}}/>
        <Drawer.Screen name="Screen 2 " component = {Screen_2} options ={{title:"importar"}}/>
        <Drawer.Screen name="Screen 3 " component = {Screen_3} initialParams = {{valor: 0}}/>
       {/*  <Drawer.Screen name= "Screen_Import" component= {Screen_Import} options ={{title:"Importar"}}/>
        <Drawer.Screen name= "Screen_ViewImportedCards" component= {Screen_ViewImportedCards} options ={{title:" Contactos Importados"}}/> */}
      </Drawer.Navigator>

      </NavigationContainer>

    )
  }
}

export default App
