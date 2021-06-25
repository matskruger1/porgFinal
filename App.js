import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Button } from "react-native";
import { styles, header, footer, card } from './src/styles/harrystyles';
import Header from './src/components/Header';
import Screen from './src/screens/Screen';
import Footer from './src/components/Footer';

import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import Screen_Likes from "./src/screens/Screen_Likes";
import Screen_Dislikes from "./src/screens/Screen_Dislikes";
import About from "./src/screens/About";

const Drawer = createDrawerNavigator();

export default class App extends Component {
  
	constructor() {
		super();
			this.state = {}
		}  


		render (){
			return (
				<NavigationContainer>
						<View style={styles.layout}>

							<View style={header.contentStyle}>
								<Header/>
							</View>

							<Drawer.Navigator initialRouteName="Tarjeta nueva"
							drawerType="slide"
							drawerPosition="left"
							>
								<Drawer.Screen name="Tarjeta nueva" component={Screen} />
								<Drawer.Screen name="Contactos Guardados" component={Screen_Likes} />
								<Drawer.Screen name="Contactos Eliminados" component={Screen_Dislikes} />
								<Drawer.Screen name="Nosotros" component={About} />
							</Drawer.Navigator>

							<View style={footer.contentStyle}>
								<Footer/>
							</View>

						</View>
				</NavigationContainer>

  			)
		}  
  }


