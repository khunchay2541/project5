import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default class Login extends Component {
  static navigationOptions = {
    header:null
    
   };
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text
            style={{marginVertical: 15, fontSize: 18, color: 'rgba(0,0,0,1)'}}>
            สร้างรหัสผ่าน
          </Text>
        </View>
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="รหัสผ่าน"
          placeholderTextColor="#FFFFFF"
          secureTextEntry={true}
        />
        <Text
          style={{marginVertical: 15, fontSize: 18, color: 'rgba(0,0,0,1)'}}>
          ยืนยันรหัสผ่าน
        </Text>
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="รหัสผ่าน"
          placeholderTextColor="#FFFFFF"
          secureTextEntry={true}
        
        />
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.buttonText1}> สร้างบัญชี </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FBE8A6',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    width: 300,
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#000000',
    marginVertical: 10,
  },
  button1: {
    width: 300,
    backgroundColor: '#F4976C',
    borderRadius: 25,
    paddingHorizontal: 16,
    marginVertical: 10,
    paddingVertical: 13,
  },
  buttonText1: {
    flexGrow: 1,
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
