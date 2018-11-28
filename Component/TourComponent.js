import React, {Component} from 'react';
import {StyleSheet, Text, View, SafeAreaView, StatusBar, Image, ScrollView , Animated, FlatList} from 'react-native';
import {Icon, Card, ListItem, Header, Button, Rating } from 'react-native-elements';

// Import css
import { styles } from '../assets/css/Main';

// import file data
import { TourData } from '../BaseData/TourData';

export default class TourComponent extends Component {

	constructor(props) {
		super(props);

	  	this.state = {
	    	scrollY: new Animated.Value(0),
	  	};
	}


	static navigationOptions = ({ navigation }) => {
		const { params = {} } = navigation.state;
		let tabBarlable = 'Tour';
		let tabBarIcon = () => (
			<Image source={ require('../assets/images/tour.png') }
	        			style={ { width: 26, height: 26, tintColor: '#666' } }
	        		>
	        </Image>
		);
		return {tabBarlable, tabBarIcon};
	}	

	_renderScrollViewContent() {

	    return (

	      	<View>
	      		{TourData.map((item, i) =>
		        	<Card
					  title={item.title}
					  image={{ uri: item.img }}>
					  	<Text style={{marginBottom: 10, fontWeight: 'bold', fontSize: 16}}>
					   	 	From $ {item.price}
					  	</Text>
					  	<View style={ { flex: 1, flexDirection: 'row', marginBottom: 10 } }>
							<Rating
							  readonly
							  imageSize={20}
							  fractions={1}
							  startingValue={3.3}
							  style={{flex: 30}}
							/>
							<Text style={{flex: 70,marginLeft: 15, paddingTop: 3, color: '#c7d0d9'}}>
						  	250 Reviews
							</Text>
					  	</View>
					  	
						<View style={ { flex: 1, flexDirection: 'row' } }>
							<Button
						    backgroundColor='#03A9F4'
						    buttonStyle={{flex: 50, marginLeft: 0, marginRight: 5}}
						    title='View More' />
						    <Button
						    titleStyle={{ color: "#03A9F4" }}
						    buttonStyle={{flex: 50, borderWidth: 1, marginLeft: 5, marginRight: 0, backgroundColor: 'white', borderColor:'#03A9F4' }}
						    title='Download Brochure ' />
						</View>
					  
					</Card>
		        )}
			 	
	      	</View>
	    );
	}

	render(){
		return(
			<View style={styles.fill}>
				<Header
				  leftComponent={{ icon: 'menu', color: '#fff' }}
				  centerComponent={{ text: 'VIETNAM TRAVEL', style: { color: '#fff', fontWeight: 'bold' } }}
				  rightComponent={{ icon: 'search', color: '#fff' }}
				/>
				<StatusBar backgroundColor="blue" barStyle="light-content"/>
		        <ScrollView
				    style={styles.fill}
				    scrollEventThrottle={16}
				    onScroll={Animated.event(
				      [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
				    )}
				 >
		        	{this._renderScrollViewContent()}
		        </ScrollView>
				
		    </View>
		)
	}
}


