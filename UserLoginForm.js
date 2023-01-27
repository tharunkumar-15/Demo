import React,{useState} from 'react';
import {
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
} from 'react-native';
// import SignupPage from './signup';
function UserLoginForm({navigation}) {

  return (
    <View style={styles.appbody}>
      <Text style={styles.loginpage}>Conventia</Text>
        <Image 
        source={require('./Loginimage.jpg')}
        style={styles.loginimage}
        resizeMode='stretch'
        />
       <Pressable
        onPress={()=>navigation.navigate('userloginpage')}
        style={styles.loginbutton}
       >
          <Text style={styles.logintext}>Login</Text>
       </Pressable>

       <Pressable
        onPress={()=>navigation.navigate('Signpage')}
        style={styles.loginbutton}
       >
          <Text style={styles.logintext}>Sign up</Text>
       </Pressable>
      </View>
  );
}

const styles = StyleSheet.create({

  loginimage:{
    width:150,
    height:150,
    borderRadius:80,
    marginBottom:25,
  },

  loginpage:{
     fontWeight:'bold',
     fontSize:40,
     marginBottom:20,
     color:'white',
  },
  appbody:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#000075"
  },
  loginbutton:{
    padding:15,
    backgroundColor:"#131E3A",
    width:'50%',
    justifyContent:'center',
    alignItems:'center',
    marginBottom:20,
    borderRadius:30
  },
  logintext:{
     fontSize:20,
     color:"white"
  }
});

export default UserLoginForm;
