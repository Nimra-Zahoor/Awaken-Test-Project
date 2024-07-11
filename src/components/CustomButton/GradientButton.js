import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './style';

const GradientButton = ({onPress, colors, text, disabled}) => {
  return (
    <TouchableOpacity
      style={styles.signupButton}
      onPress={onPress}
      disabled={disabled}>
      <LinearGradient
        colors={colors}
        style={styles.gradient}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        <Text style={styles.signupButtonText}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientButton;
