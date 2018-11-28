import React, {Component} from 'react';
import {StyleSheet, Text, View, SafeAreaView, StatusBar, Image} from 'react-native';
import {Icon } from 'react-native-elements';

export default class CruiseComponent extends Component {

	static navigationOptions = ({ navigation }) => {
		const { params = {} } = navigation.state;
		let tabBarlable = 'Cruise';
		let bgColor = '#666';
		
		let tabBarIcon = () => (
			<Image source={ require('../assets/images/cruise.png') }
	        			style={ { width: 26, height: 26, tintColor: bgColor } }
	        		>
	        </Image>
		);
		return {tabBarlable, tabBarIcon};
	}	

	render(){
		return(
			<View style={ {flex: 1, backgroundColor: 'violet'} }>
				<Text>Cruise</Text>
			</View>
		)
	}
}

