import React, { Component } from 'react';
import { styles } from './src/styles/Styles';
import Header from './src/Components/Header';
import Screen from './src/screens/Screen_2';
import Footer from './src/components/Footer';


import { View } from "react-native";

export default class App extends Component {
  
	constructor() {
		super();
			this.state = {}
		}  


		render (){
			return (
				<View style={styles.layout}>

					<View style={styles.layout}>
						<Header/>
					</View>

					<View style={styles.layout}>
						<Screen/>
					</View>

					<View style={styles.layout}>
						<Footer/>
					</View>
				
				</View>
  			)
		}  
  }