import React, {useState, useEffect} from 'react';
import {Buffer} from 'buffer';
import Permissions from 'react-native-permissions';
import Sound from 'react-native-sound';
import AudioRecord from 'react-native-audio-record';
import{
    View,
    PermissionsAndroid,
    Button,
} from 'react-native';

const NewConversationTab = () => {
  const [audioFile, setAudioFile] = useState('');
  const [recording, setRecording] = useState(false);
  const [loaded, setLoaded] = useState(false);
  let sound = null;

  useEffect(() => {
    const initAudioRecord = async () => {
      await checkPermission();

      const options = {
        sampleRate: 16000,
        channels: 1,
        bitsPerSample: 16,
        wavFile: 'test.wav',
      };

      AudioRecord.init(options);

      AudioRecord.on('data', (data) => {
        const chunck = Buffer.from(data, 'base64');
      });
    };
    initAudioRecord();
  }, []);

  const checkPermission = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      {
        title: 'Microphone Permission',
        message:
          'Needs access to your microphone',
        buttonNeutral: 'Ask me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    const p = await Permissions.check('microphone');
    if (p === 'authorized') return;
    return requestPermission();
  };

  const requestPermission = async () => {
    const p = await Permissions.request('microphone');
  };

  const start = () => {
    setAudioFile('');
    setRecording(true);
    setLoaded(false);
    AudioRecord.start();
  };

  const stop = async () => {
    if (!recording) return;
    let audioFile = await AudioRecord.stop();
    console.log('audioFile', audioFile);
    setAudioFile(audioFile);
    setRecording(false);
  };

  const load = () => {
    return new Promise((resolve, reject) => {
      if (!audioFile) {
        return reject('file path is empty');
      }

      sound = new Sound(audioFile, '', (error) => {
        if (error) {
          console.log('failed to load the file', error);
          return reject(error);
        }
        setLoaded(true);
        return resolve();
      });
    });
  };

  const play = async () => {
    if (!loaded) {
      try {
        await load();
      } catch (error) {
        console.log(error);
      }
    }
    Sound.setCategory('Playback');
    sound.play();
    // sound.play((success) => {
    //   if (success) {
    //     console.log('Successfully finished playing');
    //   } else {
    //     console.log('Playback failed due to audio decoding errors');
    //   }
    // });
  };


  return (
    <View>
      <View>
        <Button onPress={start} title="Record" disabled={recording} />
        <Button onPress={stop} title="Stop" disabled={!recording} />
        <Button onPress={play} title="Play" disabled={!audioFile}/>
      </View>
    
    </View>
  );

}

export default NewConversationTab;