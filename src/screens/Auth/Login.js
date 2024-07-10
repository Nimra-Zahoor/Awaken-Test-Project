import React, {useState} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';

import FacebookIcon from '../../../assets/svgs/facebook-icon.svg';
import GoogleIcon from '../../../assets/svgs/google-icon.svg';
import GradientButton from '../../components/CustomButton/GradientButton';
import AppBar from '../../components/Appbar/AppBar';
import SocialMediaButton from '../../components/CustomButton/SocialMediaButton';

import {styles} from './styles';
import CustomInput from '../../components/CustomInput/CustomInput';
import {useNavigation} from '@react-navigation/native';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth();
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        Alert.alert(
          `Hello Success ${user.displayName || ''}`,
          'Sign in successfully!',
        );
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert(`Error ${errorCode}`, `${errorMessage}`);
      });
  };
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
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <CustomInput
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <GradientButton
            onPress={handleLogin}
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
