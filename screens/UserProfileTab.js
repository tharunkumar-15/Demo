import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import CustomButton from '../CustomButton';
import {signOut} from 'firebase/auth';
import {auth} from '../config';
import {doc, getDoc} from 'firebase/firestore';
// import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector, useDispatch} from 'react-redux';
import {setUser} from '../Redux/Actions';
import {db} from '../config';

function UserProfileTab({navigation}) {
  const [userdata, setUserdata] = useState([]);
  const[modal,setModal]=useState(false);
  const {user} = useSelector(state => state.useReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    Userdata();
  },[]);

  const Userdata = async () => {
    try {
      const UserRef = doc(db, 'Users', user);
      const UserSnap = await getDoc(UserRef);
      // if (UserSnap.exists()) {
      //   console.log("Document data:", UserSnap.data());
      // } else {
      //   // doc.data() will be undefined in this case
      //   console.log("No such document!");
      // }
      setUserdata(UserSnap.data());
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    try {
      signOut(auth).then(() => {
        AsyncStorage.removeItem('UserData');
        dispatch(setUser(''));
        navigation.navigate('userloginpage');
      });
    } catch (error) {
      alert(error);
    }
  };
  return (
    <View style={styles.usercontainer}>
      <View style={styles.userdetails}>
        <View>
          <Text style={styles.datacontainer}>Name:{userdata.Name}</Text>
          <Text style={styles.datacontainer}>Email:{userdata.Email}</Text>
        </View>
      </View>
      <View style={styles.buttonstyle}>
      <CustomButton 
      buttonTitle="Sign Out" 
      onPress={() => logout()} />
      <CustomButton
        buttonTitle="Edit Profile"
      />
      </View>
    </View>
  );
}
export default UserProfileTab;

const styles = StyleSheet.create({
  usercontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcometext: {
    fontSize: 25,
    color: 'black',
  },
  userdetails:{
     flex:2,
  },
  datacontainer: {
    textAlign: 'center',
    color: 'black',
    fontSize: 19,
    margin: 7,
    marginTop:25,
  },
  buttonstyle: {
    flex: 1,
    width:'90%',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
  },
})

