import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {collection, query, where, onSnapshot} from 'firebase/firestore';
import {db} from '../config';
import {useSelector} from 'react-redux';
import CustomCard from './CustomCard';
import CustomInput from '../CustomInput';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {format} from 'date-fns';
export default function ImportantTab() {
  const {user} = useSelector(state => state.useReducer);
  const [data, setData] = useState([]);
  const [modalStates, setModalStates] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const keys=['Summary','SummaryDate']

  useEffect(() => {
    const q = query(
      collection(
        db,
        'Users',
        user,
        'Relatives',
        'uUvRiipoUTGqRSD6UAUF',
        'RecordedConversation',
      ),
      where('Important', '==', true)
    );

    const unsubscribe = onSnapshot(q, snapshot => {
      const ImportantData = snapshot.docs.map(relativeDoc => ({
        ...relativeDoc.data(),
        id: relativeDoc.id,
      }));
      setData(ImportantData);
      setModalStates(new Array(ImportantData.length).fill(false));
    });

    return () => unsubscribe();
  }, [ ]);

  return (
    <View style={styles.Cardcontainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{alignItems: 'center'}}
        style={styles.scrollcontainer}>
        <Text style={styles.Tabtext}>Important Conversation Tab</Text>
        <View style={styles.filtercontainer}>
          <View style={styles.searchcontainer}>
            <CustomInput
              placeholderText="Search"
              autoCapitalize="none"
              autoCorrect={false}
              Icon={FontAwesome}
              Icontype="search"
              onChangeText={(text) => setSearchQuery(text)}
            />
          </View>
          <View style={styles.filtericon}>
            <TouchableOpacity>
              <Image
                source={require('../filter.png')}
                style={styles.Icon}
                resizeMode="stretch"
              />
            </TouchableOpacity>
          </View>
        </View>
        {data &&
  data
    .filter((info) =>
      keys.some(
        (key) =>{
          const filterKey=key==='SummaryDate'?format(
            new Date(info.SummaryDate.seconds * 1000),
            'MMM d, yyyy h:mm a',
          ):info[key]
        return(
          filterKey &&
          typeof filterKey === 'string' &&
          filterKey.toLowerCase().includes(searchQuery.toLowerCase())
         )
        }
      )
    )
    .map((info, index) => (
      <View key={index} style={styles.cardstyle}>
        <CustomCard
          info={info}
          modalStates={modalStates}
          setModalStates={setModalStates}
          index={index}
          setData={setData}
        />
      </View>
    ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Cardcontainer: {
    flex: 1,
    // justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#F8F6F3',
  },
  Tabtext: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    padding: 10,
  },
  cardstyle: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollcontainer: {
    width: '100%',
  },
  filtercontainer: {
    flex: 1,
    flexDirection: 'row',
  },
  searchcontainer: {
    flex: 6,
    marginLeft: 15,
  },
  filtericon: {
    flex: 1,
  },
  Icon: {
    width: 28,
    height: 22,
    marginLeft: 8,
    marginTop: 25,
  },
});
