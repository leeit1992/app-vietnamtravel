import React, {Component} from 'react';
import {StyleSheet, Text, View, SafeAreaView, StatusBar, Image, ScrollView , Animated, FlatList} from 'react-native';
import {Icon,Header,SearchBar,Tile } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

// Import css
import { styles } from '../assets/css/Main';

// import file data
import { TourData } from '../BaseData/TourData';
import { TravelStyle1 } from '../BaseData/TourData';
import { TravelStyle2 } from '../BaseData/TourData';


const HEADER_MAX_HEIGHT = 250;
const HEADER_MIN_HEIGHT = 70;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export default class HomeComponent extends Component {

	static navigationOptions = ({ navigation }) => {
		const { params = {} } = navigation.state;
		let tabBarlable = 'Home';
		let tabBarIcon = () => (
			<Image source={ require('../assets/images/home.png') }
	        			style={ { width: 26, height: 26, tintColor: '#666' } }
	        		>
	        </Image>
		);
		return {tabBarlable, tabBarIcon};
	}	

	constructor(props) {
		super(props);

	  	this.state = {
	    	scrollY: new Animated.Value(0),
	  	};
	}

	_renderScrollViewContent() {

	    return (

	      	<View style={styles.scrollViewContent}>
	      		
	      		<View style={ { flex: 1, flexDirection: 'column', margin: 16 } }>
	      			<View>
		      			<Text style={ styles.rowLabel }>Promotion Tours</Text>
		      			<Text style={ styles.rowLabelDesc }>List tour best price for 2019</Text>
		      			<View style={ { height: 100, marginTop: 10 } }>
		            		<FlatList
						 		horizontal={true}
						 		style={{flex:1}}
						 		data={TourData}
						 		renderItem={ ( { item, index } ) => {
						 			return (
		
						 				<Image source={ { uri : item.img }}
							        			style={ { width: 165, height: null,borderRadius: 10, margin: 4, resizeMode: 'cover'} }
							        		>
							        	</Image>
						 			);
						 		} }
						 	>
			        		</FlatList>
		        		</View>
		        	</View>
		        	
		        	<View>
		      			<Text style={ styles.rowLabel }>Travel Style</Text>
		      			<Text style={ styles.rowLabelDesc }>List travel style for 2019</Text>

		      			<View style={ {flex:1,flexDirection: 'row', height: 130, marginTop: 10 } }>
			      			{TravelStyle1.map((item, i) =>
					        	<View style={ styles.travelStyleWrap }>
			      					<Image source={ { uri : item.img }}
						        			style={ styles.travelStyleImage }
						        		>
						        	</Image>
						        	<Text style={ styles.travelStyleCapt }>Luxury</Text>
						        	<Text style={ styles.travelStyleCaptDesc }>20 tours</Text>
					        	</View>
					        )}
		        		</View>
		        		<View style={ {flex:1,flexDirection: 'row', height: 130, marginTop: 1 } }>
			      			{TravelStyle2.map((item, i) =>
					        	<View style={ styles.travelStyleWrap }>
			      					<Image source={ { uri : item.img }}
						        			style={ styles.travelStyleImage }
						        		>
						        	</Image>
						        	<Text style={ styles.travelStyleCapt }>{ item.title }</Text>
						        	<Text style={ styles.travelStyleCaptDesc }>20 tours</Text>
					        	</View>
					        )}
		        		</View>
		        	</View>

	        	</View>

	        	<LinearGradient
			          colors={['#8000FF','#6536FF', '#4C64FF','#329BFF', '#17C8FF', '#00FFFF' ]}
			          start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
			          style={ {flex: 1, flexDirection: 'column' }}
			        >
			        <View style={ { flex: 1, flexDirection: 'column', margin: 16 } }>
			        	<View>
			      			<Text style={ styles.rowLabelW }>Best Selling Tours</Text>
			      			<Text style={ styles.rowLabelDescW }>List tour best selling for 2019</Text>
			      			<View style={ { height: 150, marginTop: 10 } }>
			            		<FlatList
							 		horizontal={true}
							 		style={{flex:1}}
							 		data={TourData}
							 		renderItem={ ( { item, index } ) => {
							 			return (
			
							 				<Image source={ { uri : item.img }}
								        			style={ { width: 165, height: null,borderRadius: 10, borderWidth: 3, borderColor: 'white', margin: 4, resizeMode: 'cover'} }
								        		>
								        	</Image>
							 			);
							 		} }
							 	>
				        		</FlatList>
			        		</View>
			        	</View>
			        </View>
				</LinearGradient>

				<View style={ { flex: 1, flexDirection: 'column', margin: 16 } }>
		        	
		        	<View>
		      			<Text style={ styles.rowLabel }>Southeast Asia Tour Packages</Text>

		      			<View style={ {flex:1,flexDirection: 'row', height: 130, marginTop: 10 } }>
			      			{TravelStyle1.map((item, i) =>
					        	<View style={ styles.travelStyleWrap }>
			      					<Image source={ { uri : item.img }}
						        			style={ styles.travelStyleImage }
						        		>
						        	</Image>
						        	<Text style={ styles.travelStyleCapt }>Luxury</Text>
						        	<Text style={ styles.travelStyleCaptDesc }>20 tours</Text>
					        	</View>
					        )}
		        		</View>
		        		<View style={ {flex:1,flexDirection: 'row', height: 130, marginTop: 1 } }>
			      			{TravelStyle2.map((item, i) =>
					        	<View style={ styles.travelStyleWrap }>
			      					<Image source={ { uri : item.img }}
						        			style={ styles.travelStyleImage }
						        		>
						        	</Image>
						        	<Text style={ styles.travelStyleCapt }>{ item.title }</Text>
						        	<Text style={ styles.travelStyleCaptDesc }>20 tours</Text>
					        	</View>
					        )}
		        		</View>
		        	</View>
	        	</View>

	        	<LinearGradient
			          colors={['#085d87', '#27c7bb']}
			          start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
			          style={ {flex: 1, flexDirection: 'column', marginTop: 10 }}
			        >
			        <View style={ { flex: 1, flexDirection: 'column', margin: 16 } }>
			        	<View>
			      			<Text style={ styles.rowLabelW }>Tips Before Traveling</Text>
			      			<Text style={ styles.rowLabelDescW }>List tips before traveling for 2019</Text>
			      			<View style={ { height: 100, marginTop: 10 } }>
			            		<FlatList
							 		horizontal={true}
							 		style={{flex:1}}
							 		data={TourData}
							 		renderItem={ ( { item, index } ) => {
							 			return (
			
							 				<Image source={ { uri : item.img }}
								        			style={ { width: 165, height: null,borderRadius: 10,borderWidth: 3, borderColor: 'white', margin: 4, resizeMode: 'cover'} }
								        		>
								        	</Image>
							 			);
							 		} }
							 	>
				        		</FlatList>
			        		</View>
			        	</View>
			        </View>
				</LinearGradient>
	      	</View>
	    );
	}

	render(){
		const headerHeight = this.state.scrollY.interpolate({
		    inputRange: [0, HEADER_SCROLL_DISTANCE],
		    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
		    extrapolate: 'clamp',
		});

		const imageOpacity = this.state.scrollY.interpolate({
		  	inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
		  	outputRange: [1, 1, 0],
		  	extrapolate: 'clamp',
		});
		const imageTranslate = this.state.scrollY.interpolate({
		  	inputRange: [0, HEADER_SCROLL_DISTANCE],
		  	outputRange: [0, -50],
		  	extrapolate: 'clamp',
		});

		return(
			<View style={styles.fill}>
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

		        <Animated.View style={[styles.header, {height: headerHeight}]}>
				  	<View style={styles.bar}>
				    	<Animated.Image
						    style={[
						      styles.backgroundImage,
						      {opacity: imageOpacity, transform: [{translateY: imageTranslate}]},
						    ]}
						    source={require('../assets/images/bg-header.jpg')}
						  />
						<Text style={ styles.bgHeadTitle }>Vietnam Private & Guided Tours</Text>
						<Text style={ styles.bgHeadTitleSub }>All travel service to Vietnam & Indochina Countries</Text>
				  	</View>
				</Animated.View>
				<Animated.View style={styles.header}>
				  	<Header
					  leftComponent={{ icon: 'menu', color: '#fff' }}
					  centerComponent={{ text: 'VIETNAM TRAVEL', style: { color: '#fff', fontWeight: 'bold' } }}
					  rightComponent={{ icon: 'search', color: '#fff' }}
					/>
				</Animated.View>
		    </View>
		);
	}
}

