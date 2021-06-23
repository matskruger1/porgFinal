import React, { Component } from 'react';
import { styles, header, footer, card } from './src/styles/harrystyles';
import Header from './src/components/Header';
import Screen from './src/screens/Screen';
import Footer from './src/components/Footer';

import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import{createDrawerNavigator} from "@react-navigation/drawer";
import Screen_Likes from "./src/screens/Screen_Likes";
import Screen_Dislikes from "./src/screens/Screen_Dislikes";



import { View, TouchableOpacity, Text } from "react-native";

const Stack = createStackNavigator();

export default class App extends Component {
  
	constructor() {
		super();
			this.state = {}
		}  


		render (){
			return (
				<View style={styles.layout}>

					<View style={header.contentStyle}>
						<Header/>
					</View>

					<View style={styles.layout}>
						<Screen/>
					</View>
					
					<NavigationContainer>
						<Stack.Navigator
					/* 	initialRouteParams ="Screen"
						drawerPosition ="left"
						drawerType="slide"
						drawerStyle={{ backgroundColor:"grey",
						width:250}}
						drawerContentOptions={{
							activeTintColor:"white",
							activeBackgroundColor:"black",
							inactiveTintColor:"grey",
							itemStyle:{borderRadius:100,
							borderWidth:3},
							labelStyle:{fontWeight:"bold",fontSize:20},
							
							
						}} */>
							<Stack.Screen name="guardados" component={Screen_Likes} options ={{title:"Guardados"}} />
							<Stack.Screen name="eliminados" component={Screen_Dislikes} options ={{title:"eliminados"}} />
						</Stack.Navigator>
					</NavigationContainer>

					<View style={footer.contentStyle}>
						<Footer/>
					</View>
				
				</View>
  			)
		}  
  }


