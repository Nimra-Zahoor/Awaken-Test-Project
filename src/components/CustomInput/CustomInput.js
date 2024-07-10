import React from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

const CustomInput = ({
  placeholder,
  keyboardType,
  secureTextEntry,
  style,
  icon: Icon,
  showIcon,
  onIconPress,
  value,
  onChangeText,
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.input, style]}
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
      />
      {showIcon && (
        <TouchableOpacity onPress={onIconPress} style={styles.iconContainer}>
          <Icon />
        </TouchableOpacity>
      )}
    </View>
  );
};
export default CustomInput;
