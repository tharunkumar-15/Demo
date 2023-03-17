import {StyleSheet, Text, View,ScrollView} from 'react-native';
import React,{useEffect,useState} from 'react';
import { collection, query, where, onSnapshot } from "firebase/firestore";
import {db} from '../config';
import {useSelector} from 'react-redux';
import CustomCard from './CustomCard';

export default function ImportantTab() {
    const {user} = useSelector(state => state.useReducer);
    const[data,setData]=useState([]);
    const [modalStates, setModalStates] = useState([]);

    useEffect(() => {
        const q = query(collection(db,
            'Users',
            user,
            'Relatives',
            'uUvRiipoUTGqRSD6UAUF',
            'RecordedConversation'
        ), where('Important', '==', true));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const ImportantData = snapshot.docs.map(relativeDoc => ({
                ...relativeDoc.data(),
                id:relativeDoc.id
            }));
            setData(ImportantData);
            setModalStates(new Array(ImportantData.length).fill(false));
        });

        return () => unsubscribe();
    }, [user]);

    return (
        <View style={styles.Cardcontainer}>
         <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{alignItems: 'center'}} style={styles.scrollcontainer}>
            <Text style={styles.Tabtext}>Important Conversation Tab</Text>
            {data && data.map((info, index) => (
              <View key={index} style={styles.cardstyle}>
                <CustomCard info={info} modalStates={modalStates} setModalStates={setModalStates} index={index} setData={setData}/>
              </View>
            ))}
          </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    Cardcontainer:{
      flex:1,
      // justifyContent:'center',
      alignItems:'center',
      backgroundColor: '#F8F6F3',
    },
    Tabtext: {
        fontSize: 25,
        color: 'black',
        fontWeight:'bold',
        padding:10,
    },
    cardstyle:{
      width:'100%',
      justifyContent:'center',
      alignItems:'center',
    },
    scrollcontainer:{
      width:'100%',
    }
});
