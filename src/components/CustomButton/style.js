import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  signupButton: {
    borderRadius: wp('5%'),
    marginVertical: hp('2%'),
  },
  signupButtonText: {
    color: '#FFFFFF',
    fontSize: wp('5%'),
    fontWeight: 'bold',
  },
  iconContainer: {
    marginRight: wp('12%'),
  },
  gradient: {
    paddingVertical: hp('1.5%'),
    alignItems: 'center',
    borderRadius: wp('10%'),
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp('7%'),
    borderRadius: wp('7%'),
    paddingVertical: hp('2%'),
    marginVertical: hp('1%'),
  },
  socialButtonText: {
    fontSize: wp('3%'),
    marginLeft: wp('2%'),
    color: '#F6F1FB',
    fontFamily: 'Poppins',
  },
});
