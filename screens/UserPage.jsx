import React,{useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import{
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import CustomInput from '../CustomInput';
import DateTimePicker from '@react-native-community/datetimepicker'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'

function UserPage() {


  const [time, setTime] = useState(new Date());
  const [show, setShow] = useState(false);


  const onChangeTime = (event, selectedTime) => {
    setTime(selectedTime);
    setShow(false);
  };

  const showTimepicker = () => {
    setShow(true);
  };
  return (
    <View style={styles.appointmentcontainer}>
      <ScrollView contentContainerStyle={{alignItems: 'center'}}
          showsVerticalScrollIndicator={false}>
         <Text style={styles.appointtext}>Appointment Page</Text>
         <CustomInput
           placeholderText={"Title"}
           secureTextEntry={true}
           autoCapitalize="none"
           autoCorrect={false}
           Icon={MaterialCommunityIcons}
           Icontype='subtitles-outline'
         />
         <CustomInput
           placeholderText={"Agenda"}
           secureTextEntry={true}
           autoCapitalize="none"
           autoCorrect={false}
           Icon={MaterialCommunityIcons}
           Icontype='view-agenda'
         />
        <CustomInput
           placeholderText={"Guest_Name"}
           secureTextEntry={true}
           autoCapitalize="none"
           autoCorrect={false}
           Icon={Fontisto}
           Icontype='person'
         />
          <TouchableOpacity onPress={showTimepicker}>
          <CustomInput
            placeholderText={time.toLocaleTimeString()}
            autoCapitalize="none"
            autoCorrect={false}
            Icon={MaterialCommunityIcons}
            Icontype="clock-time-five"
          />
        </TouchableOpacity>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={time}
            mode="time"
            is24Hour={true}
            display="spinner"
            onChange={onChangeTime}
          />
        )}
       </ScrollView>
    </View>
  );
}

export default UserPage;

const styles = StyleSheet.create({
  appointmentcontainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  appointtext:{
     textAlign:'center',
     fontSize:20,
     color:'black',
     marginTop:10,
     marginBottom:10,
     fontWeight:'bold'
  },

})
