import React,{useState} from 'react'
import{
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity
}from 'react-native';
import {createUserWithEmailAndPassword } from "firebase/auth";
import  {auth} from './config'
function SignupPage({navigation}) {

  // const navigation = useNavigation();
  const[email,setemail]=useState();
  const[password,setpassword]=useState();
   
  // const{signup}=useContext(AuthContext)

  const signup=()=>{
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert('User created successfully')
      navigation.replace("userloginpage");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
   }
  return (
    <View style={styles.signupmainpage}>
    <View style={styles.signupcontainer}>
    <ScrollView>
      <Text style={styles.signuppagetext}>
         Sign up
      </Text>
      <Text style={styles.emailtext}>
         Enter your email:
      </Text>
      <TextInput 
       style={styles.emailfield}
       placeholder='Email'
       placeholderTextColor='black'
       value={email}
       onChangeText={(email)=>setemail(email)}
       />
       <Text style={styles.emailtext}>
        Enter your full name:
      </Text>
      <TextInput 
       style={styles.emailfield}
       placeholder='Name'
       placeholderTextColor='black'
       />
       <Text style={styles.emailtext}>
        Enter a Password:
      </Text>
      <TextInput 
       style={styles.emailfield}
       placeholder='Password'
       placeholderTextColor='black'
       secureTextEntry={true}
       value={password}
       onChangeText={(password)=>setpassword(password)}
       />
       <Text style={styles.emailtext}>
        Confirm Password:
      </Text>
      <TextInput 
       style={styles.emailfield}
       placeholder='Password'
       placeholderTextColor='black'
       secureTextEntry={true}
       />
       <TouchableOpacity
       style={styles.submitbutton}
      onPress={()=>signup()}
       >
        <Text style={styles.submittext}>SignUp</Text>
       </TouchableOpacity>
       </ScrollView>
    </View>
   </View>
)
}

export default SignupPage;


const styles=StyleSheet.create({
   signupmainpage:{
    flex:1,
    backgroundColor:'#00000099',
    justifyContent:'center',
    alignItems:'center',
   },
   signuppagetext:{
    fontWeight:'bold',
    fontSize:35,
    color:'black',
    marginBottom:15,
    textAlign:'center'
   },
   signupcontainer:{
    width:'85%',
    padding:20,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
    borderRadius:10,
    paddingBottom:30,
   },
   emailfield:{
    width:240,
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
    marginTop:20,
    borderRadius:40,
   },
   submittext:{
    textAlign:'center',
    fontSize:27,
    color:'white',
   },
})