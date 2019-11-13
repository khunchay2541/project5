import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import Logo from '../components/Logo';



export default class SelectLoginScreen extends Component {
  static navigationOptions = {
    header:null
    
   };
  
  render() {
    const {navigate} = this.props.navigation;
    
     return (
      <View style={styles.container} >
        <StatusBar
            backgroundColor="#F4976C"
            barStyle="light-content"
          />
        <Logo />
        <View>
          <TouchableOpacity  style={styles.button1} onPress={() => navigate('Regist')}>
            <Text style={styles.buttonText1}> ลงทะเบียนฟรี </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}>
            <Text style={styles.buttonText1}> ดำเนินการต่อด้วย FACEBOOK </Text>
          </TouchableOpacity>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity style={styles.button3} onPress={() => navigate('Login')}>
              <Text style={styles.signupButton}>เข้าสู่ระบบ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor : '#FBE8A6',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText1: {
    flexGrow: 1,
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  signupText: {
    color: 'rgba(255,255,255,1)',
    fontSize: 16,
    alignItems: 'center',
  },
  button1: {
    width: 300,
    backgroundColor: '#F4976C',
    borderRadius: 25,
    paddingHorizontal: 16,
    marginVertical: 10,
    paddingVertical: 13,
  },
  button2: {
    width: 300,
    backgroundColor: '#303C6C',
    borderRadius: 25,
    paddingHorizontal: 16,
    marginVertical: 10,
    paddingVertical: 13,
  },
  signupButton: {
    flexGrow: 0.35,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
