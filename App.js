import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React,{useEffect,useState,useContext} from 'react';
// import AppStack from './AppStack';
// import AuthStack from './AuthStack';
import LoginPage from './login';
import SignupPage from './signup';
import Tabs from './navigation/tabs';
function App() {

const Stack = createNativeStackNavigator();

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

 </NavigationContainer>
);
}
export default App;

