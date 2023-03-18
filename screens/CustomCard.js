import {StyleSheet, Text, View, Modal,TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomButton from '../CustomButton';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ConversationModal from './ConversationModal';
import {db} from '../config';
import {doc, deleteDoc, updateDoc} from 'firebase/firestore';

import {format} from 'date-fns';
import {useSelector} from 'react-redux';

export default function CustomCard({
  info,
  index,
  setModalStates,
  modalStates,
  setData,
}) {
  const [imp, setImp] = useState(info.Important);
  const {user} = useSelector(state => state.useReducer);

  const modalHandler = index => {
    setModalStates(prevStates => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };
  useEffect(() => {
    setImp(info.Important);
  }, [info.Important]);

  const imporconv = async (docid, currentImportantState) => {
    setImp(!currentImportantState);
    try {
      const Imporconv = doc(
        db,
        'Users',
        user,
        'Relatives',
        'uUvRiipoUTGqRSD6UAUF',
        'RecordedConversation',
        docid,
      );

      await updateDoc(Imporconv, {
        Important: !currentImportantState,
      }); // update the state of imp only for the card that was clicked
    } catch (error) {
      console.error(error);
    }
  };

  const deleterelative = async docid => {
    try {
      const conversationRef = doc(
        db,
        'Users',
        user,
        'Relatives',
        'uUvRiipoUTGqRSD6UAUF',
        'RecordedConversation',
        docid,
      );
      await deleteDoc(conversationRef).then(() => {
        alert('Deleted Data Successfully');
        setData(prevData => prevData.filter(item => item.id !== docid));
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.cards}>
      <Text style={styles.remaininfo} numberOfLines={2}>
        {info.SummaryDate?.seconds && (
          <Text style={styles.remaininfo} numberOfLines={2}>
            {format(
              new Date(info.SummaryDate.seconds * 1000),
              'MMM d, yyyy h:mm a',
            )}
            : {info.Summary}
          </Text>
        )}
      </Text>
      <View style={styles.logostyle}>
        <AntDesign
          size={25}
          color={'white'}
          name="delete"
          style={{marginTop: 15}}
          onPress={() => deleterelative(info.id)}
        />
        <TouchableOpacity onPress={() => imporconv(info.id, imp)}>
          <AntDesign
            name={imp ? 'star' : 'staro'}
            size={25}
            color={imp ? '#FFD700' : 'black'}
            style={styles.staricon}
          />
        </TouchableOpacity>
        <View style={styles.buttonstyles}>
          <CustomButton
            buttonTitle="More Info"
            buttonStyle={{
              width: '65%',
              backgroundColor: '#f95999',
            }}
            textstyle={{
              fontSize: 15,
            }}
            onPress={() => modalHandler(index)}
          />
        </View>
        <Modal
          visible={modalStates[index]}
          onRequestClose={() => modalHandler(index)}
          animationType="fade"
          transparent={true}>
          <ConversationModal
            conversation={info.Summary}
            modalhandler={() => modalHandler(index)}
          />
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cards: {
    backgroundColor: '#51087E',
    width: '90%',
    padding: 18,
    marginBottom: 20,
    borderRadius: 10,
    margin: 5,
    marginRight: 10,
  },
  remaininfo: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  logostyle: {
    flexDirection: 'row',
  },
  buttonstyles: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginLeft: 20,
  },
  staricon:{
    marginLeft:18,
    marginTop:15,
  }
});
