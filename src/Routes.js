import React, { Component } from 'react';
import {Router,Stack,Scene} from  'react-native-router-flux';


import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';


import Login from './pages/Login';

import SelectLogin from './pages/SelectLogin'

export default class Routes extends Component {
    

  render() {
    return (
        <Router>
        <Stack key="root">
          <Scene key="SelectLogin" component={SelectLogin} title="Login" initial ={true} />
         

         
        </Stack>
      </Router>
    );
  }
}

