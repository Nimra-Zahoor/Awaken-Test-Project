import {TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import BackArrow from '../../../assets/svgs/back-arrow.svg';
import {useNavigation} from '@react-navigation/native';
const AppBar = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.goBack()}>
      <View style={styles.circle}>
        <BackArrow />
      </View>
    </TouchableOpacity>
  );
};

export default AppBar;
