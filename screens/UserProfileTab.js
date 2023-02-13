import React, { useEffect, useState } from 'react'
import{
    View,
    Text,
    StyleSheet,
} from 'react-native';
import CustomButton from '../CustomButton';
import { signOut } from 'firebase/auth';
import { auth } from '../config';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'
function UserProfileTab() {
  const navigation = useNavigation();

  const logout=()=>{
    try{
        signOut(auth).then(()=>{
          AsyncStorage.removeItem('UserData');
          navigation.navigate('userloginpage')
        })
      }
        catch(error){
          alert(error);
        }
    }
  return (
    <View style={styles.usercontainer}>
      <CustomButton buttonTitle='Sign Out' onPress={()=>logout()}/> 
    </View>
  );
}
export default UserProfileTab;

const styles=StyleSheet.create({
    usercontainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#86c4b5',
    },
    welcometext:{
        fontSize:25,
        color:'black',
    },
})