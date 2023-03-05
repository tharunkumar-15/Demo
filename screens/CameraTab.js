import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import CameraResultTab from './CameraResultTab';
import PreviousConverstionTab from './PreviousConversationTab';
import NewConversationTab from './NewConversationTab';
import { Text } from 'moti';

const Stack= createStackNavigator();

function CameraTab() {
  return (
    // <Stack.Navigator screenOptions={{header:()=>null}}>
    //   <Stack.Screen name="CameraResultTab" component={CameraResultTab} />
      

    // </Stack.Navigator>
    <Text>Hello</Text>
  );
}

export default CameraTab;

