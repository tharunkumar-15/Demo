import React from 'react';
import {Text,Pressable, StyleSheet} from 'react-native';

const CustomButton = ({buttonTitle, ...rest}) => {
  return (
    <Pressable style={styles.buttonContainer} {...rest}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: '40%',
    backgroundColor: '#131E3A',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});