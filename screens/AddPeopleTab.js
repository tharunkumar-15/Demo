import {Image} from '@motify/components';
import React from 'react';
import {View, Text, StyleSheet, Pressable, TextInput, KeyboardAvoidingView} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomButton from '../CustomButton';

function AddPeopleTab() {
  return (
    <View style={styles.usercontainer}>
      {/* <Image
        source={require('./Conventia.png')}
        resizeMode="contain"
        style={{
          width: 170,
          height: 60,
          marginLeft:10
        }}
      /> */}
      <ScrollView styles={styles.usercontainer}>
        <View style={styles.imagecomponent}>
          <Image
            source={{
              uri: 'https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg',
            }}
            style={styles.imagestyle}
          />
          <Pressable style={styles.dotStyle}>
            <Icon
              name="camera"
              size={30}
              color="#fff"
              onPress={console.log('Camera')}
            />
          </Pressable>
        </View>

        <Text style={styles.headtext}>Enter details</Text>

        <View style={styles.inputtextstyle}>
          <Text style={styles.inputtext}>Name:</Text>
          <TextInput style={styles.textstyle} />

          <Text style={styles.inputtext1}>Relation:</Text>
          <TextInput style={styles.textstyle} />
        </View>
        <CustomButton buttonStyle={{marginLeft: 200}} />
      </ScrollView>
    </View>
  );
}

export default AddPeopleTab;

const styles = StyleSheet.create({
  usercontainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imagecomponent: {
    alignItems: 'center',
  },
  headtext: {
    fontSize: 25,
    color: 'black',
    marginTop: 20,
    paddingLeft: 20,
  },
  inputtext: {
    fontSize: 25,
    color: 'black',
    paddingLeft: 20,
    // marginTop:10
  },
  inputtext1: {
    fontSize: 25,
    color: 'black',
    paddingLeft: 20,
    marginTop: 15,
  },
  textstyle: {
    height: 40,
    // borderWidth:1,
    borderBottomWidth: 2,
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  inputtextstyle: {
    margin: 10,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#ddd',
  },
  imagestyle: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginTop: 80,
  },
  dotStyle: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: '#6E01EF',
    alignItems: 'center',
    marginLeft: 90,
    justifyContent: 'center',
  },
});
