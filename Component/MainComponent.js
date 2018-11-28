import React, {Component} from 'react';
import { TabNavigator } from 'react-navigation';
import HomeComponent from './HomeComponent';
import TourComponent from './TourComponent';
import CruiseComponent from './CruiseComponent';
import OtherComponent from './OtherComponent';

let routerConfigs = {
	Home : {
		screen: HomeComponent
	},
	Tour : {
		screen: TourComponent
	},
	Cruise : {
		screen: CruiseComponent
	},
	More : {
		screen: OtherComponent
	}
}

let tabNavigatorConfig = {
	tabBarPosition: 'bottom',
	animationEnabled : true,
	swipeEnabled : true,
	tabBarOptions: {
	  	activeTintColor: '#03A9F4',
	  	inactiveTintColor: '#666',
	  	labelStyle: {
	    	fontSize: 13,
	    	fontWeight: 'bold',
	  	},
	  	style: {
	    	backgroundColor: 'white',
	    	paddingTop: -10
	  	},
	}
};

export default TabNavigator(routerConfigs, tabNavigatorConfig);