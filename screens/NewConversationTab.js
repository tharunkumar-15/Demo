import React, {Component} from 'react';
import {Buffer} from 'buffer';
import Permissions from 'react-native-permissions';
import Sound from 'react-native-sound';
import AudioRecord from 'react-native-audio-record';
import {LogBox} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { Pressable } from 'react-native';
import { MotiView } from '@motify/components';
import { Easing } from 'react-native-reanimated';
import{
    View,
    Text,
    StyleSheet,
    PermissionsAndroid,
    Button,
} from 'react-native';


// Ignore log notification by message:
LogBox.ignoreLogs(['Warning: ...']);

// Ignore all log notifications:
LogBox.ignoreAllLogs();

class NewConversationTab extends Component 
{

  constructor()
  {
    super();
    this.state= {isStart:true}

  }
  sound =null;
  state ={
    audioFile:'',
    recording: false,
    loaded: false,
    paused: true,
  } ;

  async componentDidMount() {
    await this.checkPermission();

    const options = {
      sampleRate: 16000,
      channels: 1,
      bitsPerSample: 16,
      wavFile: 'test.wav',
    };

    AudioRecord.init(options);

    AudioRecord.on('data', data =>{
      const chunck = Buffer.from(data, 'base64');
      console.log('chunck size', chunck.byteLength);
    });
  }

  checkPermission = async () => {

    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      {
        title: "Cool Photo App Camera Permission",
        message:"Cool Photo App needs access to your camera" + 
        "so you can take awesome pictures.",
        buttonNeutral:"Ask me Later",
        buttonNegative:"Cancel",
        buttonPositive:"OK"
      }
    );
    const p= await Permissions.check('microphone');
    console.log('permission check',p);
    if(p === 'authorized') return;
    return this.requestPermission();
  };

  requestPermission = async () => {
    const p = await Permissions.request('microphone');
    console.log('permission request', p);
  };

  start = () => {
    console.log('start record');
    this.setState({audioFile:'', recording: true, loaded: false});
    AudioRecord.start();
  };

  stop = async () => {
    if(!this.state.recording) return;
    console.log('Stop record');
    let audioFile = await AudioRecord.stop();
    console.log('audioFile', audioFile);
    this.setState({audioFile, recording: false});
  };

  load = () => {
    return new Promise((resolve, reject) => {
      if(!this.state.audioFile){
        return reject('file path is empty');
      }

      this.sound = new Sound(this.state.audioFile, '', error =>{
        if(error) {
          console.log('failed to load the file', error);
          return reject(error);
        }
        this.setState({loaded: true});
        return resolve();
      });
    }); 
  };

  // play = async () => {
  //   if(!this.state.loaded){
  //     try{
  //       await this.load();
  //     } catch(error) {
  //       console.log(error);
  //     }
  //   }
  //   this.setState({paused: false});
  //   Sound.setCategory('Playback');

  //   this.sound.play(success => {
  //     if(success) {
  //       console.log('Successfully finished playing');
  //     } else {
  //       console.log('Playback failed due to audio decoding errors');
  //     }
  //     this.setState({paused: true});
  //   });
  // };

  // pause = () => {
  //   this.sound.pause();
  //   this.setState({paused: true});
  // };

  render() {
    const {recording, paused, audioFile} = this.state;
    if(this.state.isStart)
    {
    return (
      <View style={styles.container}>
        <View style={styles.text}>
          <Button onPress={this.start} title="Record" disabled={recording} />

          <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Pressable style={[styles.dot, styles.center]} onPress={this.start}>
            {/* <Pressable style={[styles.dot, styles.center]} onPress={(this.state.isStart)}> */}
              {[...Array(3).keys()].map((index) =>{
                return(
                  <MotiView
                    from={{ opacity:0.7, scale:1}}
                    animate={{opacity:0, scale:4}}
                    transition={{
                      type:'timing',
                      duration:2000,
                      easing: Easing.out(Easing.ease),
                      delay: index * 400,
                      repeatReverse: false,
                      loop: true,
                    }}
                  key={index}
                  style={[StyleSheet.absoluteFillObject, styles.dot]}
                  />
                );
              })}
                <Icon name="microphone" size={32} color="#fff" />
            </Pressable>
        </View>


          <Button onPress={this.stop} title="Stop" disabled={!recording} />
          {/* {paused ? (
            <Button onPress={this.play} title="Play" disabled={!audioFile}/>
          ) :(
            <Button onPress={this.pause} title="Pause" disabled={!audioFile}/>
          )} */}

        </View>
      
      </View>
    );
        }
        else
        {
          return( 
            <View style={styles.container}>
            <View style={styles.text}>
              <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <Pressable style={[styles.dot, styles.center]} onPress={(this.state.isStart)}>
                    <Icon name="microphone" size={32} color="#fff" />
                </Pressable>
              </View>
            </View>
          
          </View>
        );
          
        }
  }

}
 
export default NewConversationTab;

const styles=StyleSheet.create({
  container:{
        flex:1,
        justifyContent:'center',
        
    },
    text:{
        flexDirection:'row',
        justifyContent:'space-evenly',
    },

    dot:{
      width: 100,
      height:100,
      borderRadius:100,
      backgroundColor: '#6E01EF'
  },
  center: {
      alignItems:'center',
      justifyContent:'center',
  }
})