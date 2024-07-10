import React, {useState} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';

import FacebookIcon from '../../../assets/svgs/facebook-icon.svg';
import GoogleIcon from '../../../assets/svgs/google-icon.svg';
import GreenTick from '../../../assets/svgs/green-tick.svg';
import ClosedEye from '../../../assets/svgs/closed-eye.svg';
import OpenEye from '../../../assets/svgs/open-eye.svg';
import GradientButton from '../../components/CustomButton/GradientButton';
import AppBar from '../../components/Appbar/AppBar';
import SocialMediaButton from '../../components/CustomButton/SocialMediaButton';
import {collection, addDoc, getDocs} from 'firebase/firestore';

import {styles} from './styles';
import CustomInput from '../../components/CustomInput/CustomInput';
import {useNavigation} from '@react-navigation/native';
import {FIREBASE_DB} from '../../services/firebase/firebaseConfig';

const Signup = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth();
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: username,
        })
          .then(() => {
            Alert.alert('Success', 'User account created successfully!');
            const querySnapshot = getDocs(collection(FIREBASE_DB, 'users'));
            querySnapshot.forEach(doc => {
              console.log(`${doc.id} => ${doc.data()}`);
            });
            navigation.navigate('login');
          })
          .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            Alert.alert(`Error ${errorCode}`, errorMessage);
          });
        const docRef = addDoc(collection(FIREBASE_DB, 'users'), {
          name: username,
          email: email,
          password: password,
        });
        console.log('Document written with ID: ', docRef.id);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert(`Error ${errorCode}`, errorMessage);
      });
  };

  const toggleSecureTextEntry = () => {
    setSecureTextEntry(prev => !prev);
  };

  const validateEmail = email => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <>
      <AppBar />
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Create your account</Text>
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
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            icon={GreenTick}
            showIcon={username.length > 0}
          />
          <CustomInput
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            icon={GreenTick}
            showIcon={validateEmail(email)}
          />
          <CustomInput
            placeholder="Password"
            secureTextEntry={secureTextEntry}
            value={password}
            onChangeText={setPassword}
            icon={secureTextEntry ? ClosedEye : OpenEye}
            showIcon
            onIconPress={toggleSecureTextEntry}
          />
          <View style={styles.checkboxContainer}>
            <Text style={styles.checkboxText}>
              I have read the{' '}
              <Text style={styles.linkText}> Privacy Policy</Text>
            </Text>
          </View>
          <GradientButton
            onPress={handleSignUp}
            colors={['#DD3DFB', '#6C09DB']}
            text="SIGN UP"
          />
          <Text style={styles.footerText}>
            ALREADY HAVE AN ACCOUNT?{'  '}
            <TouchableOpacity onPress={() => navigation.navigate('login')}>
              <Text style={styles.linkText}>SIGN IN</Text>
            </TouchableOpacity>
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default Signup;
