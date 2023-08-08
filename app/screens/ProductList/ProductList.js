import {View, Pressable, Text, StyleSheet} from 'react-native';
import Header from './Header';

const ProductList = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {color: 'white', fontSize: 40},
});

export default ProductList;
