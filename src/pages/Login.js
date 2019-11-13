import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  AsyncStorage,
  TextInput,
} from 'react-native';

import Logo from '../components/Logo';

const userInfo = {username: 'admin', password: 'pass12345'};

export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
    }

  }

  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>
        <Logo />
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Email"
          placeholderTextColor="#FFFFFF"
          onChangeText={username => this.setState({username})}
          value={this.state.username}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Password"
          placeholderTextColor="#FFFFFF"
          secureTextEntry={true}
          onChangeText={password => this.setState({password})}
          value={this.state.password}
        />
        <TouchableOpacity onPress={this._login} style={styles.button}>
          <Text style={styles.buttonText}> Login </Text>
        </TouchableOpacity>
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Don't have an account yet? </Text>
          <TouchableOpacity onPress={() => navigate('Regist')}>
            <Text style={styles.signupButton}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  _login = async () => {
    if (
      userInfo.username === this.state.username &&
      userInfo.password === this.state.password
    ) {

     
      this.props.navigation.navigate('Home')
    } else {
      alert('Username or Password is incorrect');
    }
  };
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FBE8A6',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row',
  },
  signupText: {
    color: 'rgba(255,255,255,1)',
    fontSize: 16,
  },
  signupButton: {
    color: '#303c6c',
    fontSize: 16,
    fontWeight: '500',
  },
  button: {
    width: 300,
    backgroundColor: '#F4976C',
    borderRadius: 25,
    paddingHorizontal: 16,
    marginVertical: 10,
    paddingVertical: 13,
  },
  inputBox: {
    width: 300,
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#FFFFFF',
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

