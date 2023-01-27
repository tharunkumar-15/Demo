import React,{useEffect} from 'react'
import{
    View,
    Text,
    StyleSheet,
} from 'react-native';
function UserPage() {
  return (
    <View style={styles.usercontainer}>
      <Text style={styles.welcometext}>Welcome To User page</Text>
    </View>
  );
}

export default UserPage

const styles=StyleSheet.create({
    usercontainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    welcometext:{
        fontSize:25,
        color:'black',
    },
    submitbutton:{
      backgroundColor:'black',
      padding:15,
      paddingLeft:32,
      paddingRight:32,
      marginTop:20,
      borderRadius:40,
     },
})