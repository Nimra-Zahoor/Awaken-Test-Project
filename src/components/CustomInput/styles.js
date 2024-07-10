import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#F2F3F7',
    backgroundColor: '#F2F3F7',
    borderRadius: wp('2%'),
    padding: wp('3%'),
    height: hp('7%'),
    overflow: 'hidden',
    marginVertical: hp('1%'),
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
  iconContainer: {
    marginLeft: wp('2%'),
  },
});
