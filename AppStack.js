import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserPage from './UserPage';
function AppStack() {

const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen 
      name="UserPage"
      component={UserPage}
      />
    </Stack.Navigator>
  )
}

export default AppStack