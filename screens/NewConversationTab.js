import React, {Component, useState, useRef} from 'react';
import {Buffer} from 'buffer';
import Permissions from 'react-native-permissions';
import Sound from 'react-native-sound';
import AudioRecord from 'react-native-audio-record';
import {LogBox} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {Pressable} from 'react-native';
import {MotiView} from '@motify/components';
import {Easing} from 'react-native-reanimated';
import {AudioRecorderPlayer} from 'react-native-audio-recorder-player';
// import RNFS from 'react-native-fs';
import {View, Text, StyleSheet, PermissionsAndroid, Button} from 'react-native';

function NewConversationTab() {
  const [recording, setRecording] = useState(false);
  const audioRecorderPlayer = new AudioRecorderPlayer();
  const startRecording = async () => {
    try {
      await audioRecorderPlayer.current.startRecord();
      setRecording(true);
    } catch (error) {
      console.log(error);
    }
  };


  const stopRecording = async () => {
    try {
      await audioRecorderPlayer.current.stopRecord();
      setRecording(false);
    } catch (error) {
      console.log(error);
    }
  };

  const startPlayback = async () => {
    try {
      // const path = RNFS.DocumentDirectoryPath + '/test.mp3';
      await audioRecorderPlayer.current.startPlayer(path);
    } catch (error) {
      console.log(error);
    }
  };

  const stopPlayback = async () => {
    try {
      await audioRecorderPlayer.current.stopPlayer();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Button
        title={recording ? 'Stop Recording' : 'Start Recording'}
        onPress={recording ? stopRecording : startRecording}
      />
      <Button title="Play" onPress={startPlayback} />
      <Button title="Stop" onPress={stopPlayback} />
    </View>
  );
}

export default NewConversationTab;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
});
