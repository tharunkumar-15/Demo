import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createDrawerNavigator } from '@react-navigation/drawer';
import React,{useEffect,useState,useContext} from 'react';
// import AppStack from './AppStack';
// import AuthStack from './AuthStack';
import LoginPage from './login';
import SignupPage from './signup';
<<<<<<< HEAD
import UserPage from './UserPage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
=======
import Tabs from './navigation/tabs';

>>>>>>> 0b405b4df9174152e7906e6cda098b101f12775b
function App() {

const Stack = createNativeStackNavigator();
const Tab1=createBottomTabNavigator();
return(
 <NavigationContainer>
    <Stack.Navigator screenOptions={{header:()=>null}}>

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
      component={Tabs}
      />
    </Stack.Navigator>
<<<<<<< HEAD

 </NavigationContainer>
=======
    </NavigationContainer>
>>>>>>> 0b405b4df9174152e7906e6cda098b101f12775b
);
}
export default App;

