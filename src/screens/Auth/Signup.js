import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,

} from 'react-native';

import FacebookIcon from '../../../assets/svgs/facebook-icon.svg';
import GoogleIcon from '../../../assets/svgs/google-icon.svg';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';
import GradientButton from '../../components/CustomButton/GradientButton';

const Signup = () => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Create your account</Text>
      </View>
      <TouchableOpacity style={styles.socialButton}>
        <FacebookIcon />
        <Text style={styles.socialButtonText}>CONTINUE WITH FACEBOOK</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButtonGoogle}>
        <GoogleIcon />
        <Text style={styles.socialButtonTextGoogle}>CONTINUE WITH GOOGLE</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>OR LOG IN WITH EMAIL</Text>
      <TextInput style={styles.input} placeholder="Username" />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
      />
      <View style={styles.checkboxContainer}>
        {/* <CheckBox /> */}
        <Text style={styles.checkboxText}>
          I have read the <Text style={styles.linkText}>Privacy Policy</Text>
        </Text>
      </View>
      <GradientButton onPress={()=>{}} colors={['#DD3DFB', '#6C09DB']} text="SIGN UP"/>
      <Text style={styles.footerText}>
        ALREADY HAVE AN ACCOUNT? <Text style={styles.linkText}>SIGN IN</Text>
      </Text>
    </KeyboardAvoidingView>
  );
};

export default Signup;
