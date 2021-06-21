import React, { Component } from 'react';
import { styles, header, footer } from './src/styles/harrystyles';
import Header from './src/components/Header';
import Screen from './src/screens/Screen';
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

					<View style={header.contentStyle}>
						<Header/>
					</View>

					<View style={styles.layout}>
						<Screen/>
					</View>

					<View style={footer.contentStyle}>
						<Footer/>
					</View>
				
				</View>
  			)
		}  
  }