import React from 'react';
import {
  StatusBar,
} from 'react-native';

import {
  createAppContainer,
  createSwitchNavigator,
  NavigationActions,
  withNavigationFocus,
} from 'react-navigation';
import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';


// ***** Import Pages ***** //

// ** Splash Pages
import Splash from 'App/Pages/Splash';
// ** Auth Stack
import Register from 'App/Pages/Auth/Register';
// ** Main Stack
import Home from 'App/Pages/Home/Home';
import DetailEvents from '../Pages/Events/DetailEvents';




let _navigator;
function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

// Statusbar
const FocusAwareStatusBar = withNavigationFocus(({ isFocused, ...rest }) =>
  isFocused ? <StatusBar {...rest} /> : null
);

// Klusterisasi halaman auth
const AuthStack = createStackNavigator({
  Register: Register
}, {
  headerMode: 'none',
  navigationOptions: {
    gesturesEnabled: false,
    headerShown: false,
    ...TransitionPresets.SlideFromRightIOS
  }
});

// Klusterisasi halaman stack
const MainStack = createStackNavigator({
  Home: Home,
  DetailEvents: DetailEvents
}, {
  headerMode: 'none',
  navigationOptions: {
    gesturesEnabled: false,
    headerShown: false,
    ...TransitionPresets.SlideFromRightIOS
  }
});

// 
const AppNavigator = createSwitchNavigator({
  Splash,
  AuthStack,
  MainStack,
});

const AppContainer = createAppContainer(AppNavigator);

export default {
  navigate,
  setTopLevelNavigator,
  FocusAwareStatusBar,
  AppContainer,
};
