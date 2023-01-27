import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React,{useEffect,useState,useContext} from 'react';
// import AppStack from './AppStack';
// import AuthStack from './AuthStack';
import LoginPage from './login';
import UserLoginForm from './UserLoginForm';
import SignupPage from './signup';
import UserPage from './UserPage';
function App() {

const Stack = createNativeStackNavigator();
return(
 <NavigationContainer>
    <Stack.Navigator>
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
      <Stack.Screen 
      name="UserPage"
      component={UserPage}
      />
    </Stack.Navigator>
 </NavigationContainer>
);
}
export default App;

