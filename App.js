import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Button } from "react-native";
import { styles, header, footer, card } from './src/styles/harrystyles';
import Header from './src/components/Header';
import Screen from './src/screens/Screen';
import Footer from './src/components/Footer'; 

import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";
//Antes se instalaba el react navigation y venía con todos los navigators incluidos.  Se dejó de utilizar porque generaba paquetes muy pesados. Venían como 7 paquetes de los cuales solo se usaban 1 o 2 combinados como mucho. 

import Screen_Likes from "./src/screens/Screen_Likes";
import Screen_Dislikes from "./src/screens/Screen_Dislikes";
import About from "./src/screens/About";

const Drawer = createDrawerNavigator();
// creamos una constante con el Drawer, ese nombre (createDrawerNavigator) es el que vamos a usar luego en el navigator container.
//Vamos a tener un Menú al costado que nos va a permitir el acceso a cada una de las pantallas.
//Permite visualizar la totalidad de  la funcionalidad provista por la aplicación. El drawer me va a facilitar el tema de moverse entre pantallas porque yo no tengo que armar links al usarlo.

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


