import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp('5%'),
    backgroundColor: '#FFFFFF',
  },
  loginContainer: {
    flex: 1,
    paddingHorizontal: wp('5%'),
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    marginVertical: hp('0.1%'),
  },
  headerText: {
    fontSize: wp('7%'),
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0D1040',
    fontFamily: 'Poppins',
    marginBottom: hp('2%'),
  },
  signupButton: {
    borderRadius: wp('5%'),
    marginVertical: hp('2%'),
  },
  gradient: {
    paddingVertical: hp('1.5%'),
    alignItems: 'center',
    borderRadius: wp('10%'),
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#7583CA',
    paddingHorizontal: wp('7%'),
    borderRadius: wp('7%'),
    paddingVertical: hp('2%'),
    marginVertical: hp('1%'),
  },
  socialButtonGoogle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: wp('7%'),
    borderColor: '#EBEAEC',
    borderWidth: 1,
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('2%'),
    marginVertical: hp('1%'),
  },
  socialButtonText: {
    fontSize: wp('3.5%'),
    marginLeft: wp('13%'),
    paddingLeft: wp('2%'),
    color: '#F6F1FB',
    fontFamily: 'Poppins',
  },
  socialButtonTextGoogle: {
    fontSize: wp('3.5%'),
    marginLeft: wp('15%'),
    color: '#0D1040',
    fontFamily: 'Poppins',
  },
  orText: {
    textAlign: 'center',
    marginVertical: hp('2.5%'),
    color: '#A1A4B2',
    fontSize: hp('1.6%'),
  },
  input: {
    borderWidth: 1,
    borderColor: '#F2F3F7',
    backgroundColor: '#F2F3F7',
    borderRadius: wp('2%'),
    padding: wp('3%'),
    height: hp('7%'),
    overflow: 'hidden',
    marginVertical: hp('1%'),
  },
  checkboxContainer: {
    marginVertical: hp('1%'),
    textAlign: 'center',
  },
  checkboxText: {
    marginLeft: wp('2%'),
    color: '#A0A0A0',
    textAlign: 'center',
  },
  linkText: {
    color: '#6200EE',
    textAlign: 'center',
  },
  signupButtonText: {
    color: '#FFFFFF',
    fontSize: wp('5%'),
    fontWeight: 'bold',
  },
  footerText: {
    textAlign: 'center',
    color: '#A1A4B2',
    paddingBottom: hp('10%'),
  },
  forgotText: {
    textAlign: 'center',
    color: '#0D1040',
  },
});
