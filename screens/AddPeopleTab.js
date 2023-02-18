import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import CustomButton from '../CustomButton';
import { Pressable, StyleSheet, View } from 'react-native';
import { MotiView } from '@motify/components';
import { Easing } from 'react-native-reanimated';


function AddPeopleTab(){
  const [inital, final] =useState(100);
    return(
      // <Pressable style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Pressable style={[styles.dot, styles.center]} onPress={()=>console.log('Clicked')}>
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
      
    );
}
export default AddPeopleTab;

const styles = StyleSheet.create({
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