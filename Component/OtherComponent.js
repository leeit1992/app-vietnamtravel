import React, {Component} from 'react';
import {StyleSheet, Text, View, SafeAreaView, StatusBar, Image} from 'react-native';
import {Icon } from 'react-native-elements';

export default class OtherComponent extends Component {

	static navigationOptions = ({ navigation }) => {
		const { params = {} } = navigation.state;
		let tabBarlable = 'More';
		let bgColor = '#666';
		
		let tabBarIcon = () => (
			<Image source={ require('../assets/images/other1.png') }
	        			style={ { width: 26, height: 26, tintColor: bgColor } }
	        		>
	        </Image>
		);
		return {tabBarlable, tabBarIcon};
	}	

	render(){
		return(
			<View style={ {flex: 1, backgroundColor: 'gray'} }>
				<Text>Cruise</Text>
			</View>
		)
	}
}

