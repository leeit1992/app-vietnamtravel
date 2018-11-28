import {StyleSheet} from 'react-native';

const HEADER_MAX_HEIGHT = 250;
const HEADER_MIN_HEIGHT = 70;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const styles = StyleSheet.create({
  	fill: {
  		flex: 1,
  	},
  	row: {
	    minHeight: 40,
	    margin: 16,
	    backgroundColor: '#D3D3D3',
	    alignItems: 'center',
	    justifyContent: 'center',
	},
  	header: {
	  	position: 'absolute',
	  	top: 0,
	  	left: 0,
	  	right: 0,
	  	backgroundColor: '#03A9F4',
	  	overflow: 'hidden',
	},
	bar: {
	  	marginTop: 50,
	  	position: 'relative',
	  	height: 38,
	  	alignItems: 'center',
	  	justifyContent: 'center',
	},
	bgHeadTitle: {
		position: 'absolute',
		top: 70,
		left: 50,
		color: 'white',
		fontWeight: '500',
		fontSize: 18
	},
	bgHeadTitleSub: {
		position: 'absolute',
		top: 90,
		left: 46,
		color: 'white',
		fontWeight: '500',
		fontSize: 11
	},
	title: {
	  	backgroundColor: 'transparent',
	  	color: 'white',
	  	fontSize: 18,
	},
	scrollViewContent: {
	  	marginTop: HEADER_MAX_HEIGHT,
	},
	backgroundImage: {
	  	position: 'absolute',
	  	top: 0,
	  	left: 0,
	  	right: 0,
	  	width: null,
	  	height: HEADER_MAX_HEIGHT,
	  	resizeMode: 'cover',
	},

	rowLabel: {
		fontSize: 23,
		fontWeight: 'bold',
		marginTop: 10,
	},
	rowLabelDesc: {
		fontSize: 13,
		color: '#70778b'
	},

	rowLabelW: {
		fontSize: 23,
		fontWeight: 'bold',
		marginTop: 10,
		color: 'white'
	},
	rowLabelDescW: {
		fontSize: 13,
		color: 'white'
	},

	travelStyleWrap: {
		flex: 50, 
		height: 130,
		position: 'relative'
	},
	travelStyleImage: {
		flex: 1,  height: null,borderRadius: 10, margin: 4, resizeMode: 'cover'
	},

	travelStyleCapt: {
		position : 'absolute',
		top: 10,
		left: 15,
		color: 'white',
		fontWeight: 'bold',
		fontSize: 20
	},

	travelStyleCaptDesc: {
		position : 'absolute',
		top: 35,
		left: 15,
		color: 'white',
		fontWeight: 'bold',
		fontSize: 12
	}
});

export { styles }