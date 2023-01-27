import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserLoginForm from './UserLoginForm';
import LoginPage from './login';
import SignupPage from './signup';
function AuthStack() {

 const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Login">
    <Stack.Screen 
     name="Login"
   component={UserLoginForm}
   options={{
     headerShown:false,
    }}
   />
 <Stack.Screen 
  name="userloginpage"
  component={LoginPage}
  options={{
    headerShown:false,
   }}
   />
   <Stack.Screen 
  name="Signpage"
  component={SignupPage}
  options={{
    headerShown:false,
   }}
   />
  </Stack.Navigator>
  )
}

export default AuthStack