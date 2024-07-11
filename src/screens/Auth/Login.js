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
import {login} from '../../api/auth';

const Login = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async () => {
    try {
      setLoading(true);
      const credentials = {
        email: email,
        password: password,
      };
      await login(credentials);
      Alert.alert('Sucess', 'Login Successfully');
    } catch (error) {
      Alert.alert('Login error', `${error}`);
    } finally {
      setLoading(false);
    }
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
            disabled={loading}
            onPress={handleLogin}
            colors={loading ? ['grey', 'grey'] : ['#DD3DFB', '#6C09DB']}
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
