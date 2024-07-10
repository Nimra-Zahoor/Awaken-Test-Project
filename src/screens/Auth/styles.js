import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: wp('5%'),
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    marginVertical: hp('2%'),
  },
  headerText: {
    fontSize: wp('7%'),
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0D1040',
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
    justifyContent: 'center',
    backgroundColor: '#7583CA',
    borderRadius: wp('7%'),
    paddingVertical: hp('2%'),
    marginVertical: hp('1%'),
  },
  socialButtonGoogle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: wp('7%'),
    borderColor: '#EBEAEC',
    borderWidth: 1,
    paddingVertical: hp('2%'),
    marginVertical: hp('1%'),
  },
  socialButtonText: {
    color: '#FFFFFF',
    fontSize: wp('3%'),
    marginLeft: wp('2%'),
  },
  socialButtonTextGoogle: {
    color: '#000',
    fontSize: wp('3%'),
    marginLeft: wp('2%'),
  },
  orText: {
    textAlign: 'center',
    marginVertical: hp('2.5%'),
    color: '#A1A4B2',
    fontSize: hp('1.4'),
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
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp('1%'),
  },
  checkboxText: {
    marginLeft: wp('2%'),
    color: '#A0A0A0',
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
    color: '#A0A0A0',
  },
});
