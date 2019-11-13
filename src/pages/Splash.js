import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image
} from 'react-native';





export default class SelectLoginScreen extends Component {

    static navigationOptions = {
       header:null
       
      };

    componentDidMount(){

        setTimeout(()=>{
    
            this.props.navigation.navigate('Select');
        },1500)
    }
    
  render() {
      
    
     return (
      <View style={styles.container} >
        <StatusBar
            backgroundColor="#F4976C"
            barStyle="light-content"
          />
     <Image source={require('../images/Cash5.png')}
                            style={{width: 120, height: 80,borderRadius:7}} />
                
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor : '#FBE8A6',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent:'center'
  },
  
});
