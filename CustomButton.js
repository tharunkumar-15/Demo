import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const CustomButton = ({buttonTitle = 'submit', buttonStyle = {}, ...rest}) => {
  return (
    <TouchableOpacity style={[styles.buttonContainer, buttonStyle]} {...rest}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
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
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
});
