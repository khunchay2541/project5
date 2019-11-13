/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
/*
import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
   View,
    StatusBar,
} from 'react-native';

import Routes from './src/Routes';
import Login from './src/pages/Login';

import SelectLogin from './src/pages/SelectLogin';
import Regist from './src/pages/Regist';
import Password from './src/pages/Password';

export default class App extends Component {

    render() {
    return (
      <View style={styles.container} >
        
          <StatusBar
            backgroundColor="#F4976C"
            barStyle="light-content"
          />
          
      </View>
   
    );
  }
}
const styles = StyleSheet.create({
  container : {
    backgroundColor : '#FBE8A6',
    flex:1,
    alignItems:'center',
    justifyContent:'center'

  }
});
*/

import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
   View,
    StatusBar,
} from 'react-native';

import {createAppContainer,} from 'react-navigation';

import {createStackNavigator} from 'react-navigation-stack';


import SelectLoginScreen from './src/pages/SelectLogin';
import LoginScreen from './src/pages/Login';
import RegistScreen from './src/pages/Regist';
import PasswordScreen from './src/pages/Password';

import SplashScreen from './src/pages/Splash';
import HomeScreen from './src/User/Home'



const MainNavigator = createStackNavigator({
 
  Splash :{screen : SplashScreen},
  Select : {screen: SelectLoginScreen},
  Login : {screen: LoginScreen},
  Regist : {screen: RegistScreen},
  Password : {screen: PasswordScreen},
  Home : {screen : HomeScreen}
  
});



const App = createAppContainer(MainNavigator);

export default App;


