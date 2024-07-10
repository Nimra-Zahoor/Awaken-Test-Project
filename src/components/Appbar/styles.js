import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    paddingVertical: wp('7%'),
    paddingHorizontal: wp('5%'),
  },
  circle: {
    width: wp('12%'),
    height: wp('12%'),
    borderWidth: 1,
    borderColor: '#EBEAEC',
    borderRadius: wp('12%') / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
