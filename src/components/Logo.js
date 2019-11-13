import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';

export default class Logo extends Component {
    render() {
     return (
       <View style={styles.container}>
          
                <Image source={require('../images/Cash5.png')}
                            style={{width: 120, height: 80,borderRadius:7}} />

                
       </View>
     );
   }
 }

 const styles = StyleSheet.create({
    container : {
      
      flexGrow:1,
    
      justifyContent:'flex-end',
      alignItems:'center'
  
    },
    logoText:{
        marginVertical:15,
            fontSize:18,
            color:'rgba(255,255,255,1)'
    }
  
  });