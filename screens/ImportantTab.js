import {StyleSheet, Text, View} from 'react-native';
import React,{useEffect} from 'react';
import { collection, query, where, getDocs } from "firebase/firestore";
import {db} from '../config';
import {useSelector} from 'react-redux';

export default function ImportantTab() {
    const {user} = useSelector(state => state.useReducer);
useEffect(()=>{
   ReadData();
},[])
  const ReadData = async () => {
    const q = query(collection(db,
        'Users',
        user,
        'Relatives',
        'uUvRiipoUTGqRSD6UAUF',
        'RecordedConversation'
        ), where('Important', '==', true));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(doc => {
      console.log(doc.id, ' => ', doc.data());
    });
  };
  return (
    <View>
      <Text style={styles.Tabtext}>ImportantTab</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Tabtext: {
    fontSize: 20,
    color: 'black',
  },
});
