import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {styles} from './style';

const SocialMediaButton = ({
  Icon,
  text,
  backgroundColor,
  borderColor,
  textColor,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.socialButton,
        {backgroundColor, borderColor, borderWidth: borderColor ? 1 : 0},
      ]}>
      <View style={styles.iconContainer}>
        <Icon />
      </View>
      <Text style={[styles.socialButtonText, {color: textColor}]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default SocialMediaButton;
