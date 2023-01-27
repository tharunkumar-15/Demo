import React,{useState,useEffect} from 'react'
import {signInWithEmailAndPassword,onAuthStateChanged} from "firebase/auth";
import  {auth} from './config'
import { ReactNativeAsyncStorage } from 'firebase/auth';
// import { AuthContext } from './AuthProvider';
import AsyncStorage from '@react-native-async-storage/async-storage'
import{
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
}from 'react-native'
import { useNavigation } from '@react-navigation/native';

function LoginPage() {
  const navigation = useNavigation();

  const[email,setemail]=useState(null);
  const[password,setpassword]=useState(null);

useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      navigation.replace('UserPage')
    }
  });
},[]);

useEffect(()=>{
    getdata();
},[])

const getdata=()=>{
     try
     {
         AsyncStorage.getItem('UserData').then(value=>{
          if(value!=null)
          {
             navigation.navigate('UserPage')
          }
         })
     }
     catch(e)
     {
       alert(e);
     }
}

 const login=async()=>{
  var user={
            Email:email,
            Password:password,
          };
  await AsyncStorage.setItem('UserData',JSON.stringify(user));   
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // alert('User Login successfully')
    navigation.navigate("UserPage");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  });
 }

  return(
   <View style={styles.loginmainpage}>
    <View style={styles.logincontainer}>
      <Text style={styles.loginpagetext}>
          Login
      </Text>
      <Text style={styles.emailtext}>
        Email address:
      </Text>
      <TextInput 
       style={styles.emailfield}
       placeholder='Email'
       placeholderTextColor='black' autoCapitalize='none'
       autoCorrect={false}
       onChangeText={(email)=>setemail(email)}
       />
       <Text style={styles.emailtext}>
        Password:
      </Text>
      <TextInput 
       style={styles.emailfield}
       placeholder='Password'
       placeholderTextColor='black'
       secureTextEntry={true}
       autoCapitalize='none'
       autoCorrect={false}
       onChangeText={(password)=>setpassword(password)}
       />
       <Pressable
        onPress={()=>login()}
       style={styles.submitbutton}
       >
        <Text style={styles.submittext}>Submit</Text>
       </Pressable>
       <Text 
       style={styles.register}
       onPress={()=>navigation.navigate('Signpage')}
       >Dont have an account?Register</Text>
    </View>
   </View>
)
}

export default LoginPage;


const styles=StyleSheet.create({
   loginmainpage:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
   },
   loginpagetext:{
    fontWeight:'bold',
    fontSize:35,
    color:'black',
    marginBottom:15,
    textAlign:'center',
   },
   logincontainer:{
    width:'80%',
    padding:20,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
    borderRadius:10,
    paddingBottom:30,
   },
   emailfield:{
    width:'100%',
    borderWidth:1,
    borderColor:'#555',
    fontSize:15,
    padding:10,
    color:'black',
    borderRadius:25,
    borderColor:'rgba(0,0,0,0.2)'
   },
   emailtext:{
    fontSize:23,
    marginBottom:10,
    color:'black'
   },
   submitbutton:{
    backgroundColor:'black',
    padding:15,
    paddingLeft:32,
    paddingRight:32,
    marginTop:20,
    borderRadius:40,
   },
   submittext:{
    textAlign:'center',
    fontSize:27,
    color:'white',
   },
   register:{
    color:'blue',
    marginTop:15,
    fontSize:15,
   }
})