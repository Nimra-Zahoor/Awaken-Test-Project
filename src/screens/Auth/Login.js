import React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import FacebookIcon from '../../../assets/svgs/facebook-icon.svg';
import GoogleIcon from '../../../assets/svgs/google-icon.svg';
import GradientButton from '../../components/CustomButton/GradientButton';
import AppBar from '../../components/Appbar/AppBar';
import SocialMediaButton from '../../components/CustomButton/SocialMediaButton';

import {styles} from './styles';
import CustomInput from '../../components/CustomInput/CustomInput';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  return (
    <>
      <AppBar />
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Welcome Back!</Text>
          </View>
          <SocialMediaButton
            Icon={FacebookIcon}
            text="CONTINUE WITH FACEBOOK"
            backgroundColor="#7583CA"
            borderColor="#7583CA"
            textColor="#FFFFFF"
          />
          <SocialMediaButton
            Icon={GoogleIcon}
            text="CONTINUE WITH GOOGLE"
            backgroundColor="#FFFFFF"
            borderColor="#EBEAEC"
            textColor="#0D1040"
          />
          <Text style={styles.orText}>OR LOG IN WITH EMAIL</Text>
          <CustomInput
            placeholder="Email address"
            keyboardType="email-address"
          />
          <CustomInput placeholder="Password" secureTextEntry />
          <GradientButton
            onPress={() => {}}
            colors={['#DD3DFB', '#6C09DB']}
            text="LOG IN"
          />
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate('signup')}>
          <Text style={styles.footerText}>
            ALREADY HAVE AN ACCOUNT?{' '}
            <Text style={styles.linkText}>SIGN UP</Text>
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </>
  );
};

export default Login;
