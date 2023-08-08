import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableHighlight,
  Pressable,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ProductList from './app/screens/ProductList/ProductList';

const Stack = createStackNavigator();

const DetalhesProduto = ({navigation}) => {
  return (
    <View
      style={{
        backgroundColor: 'red',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Pressable onPress={() => navigation.navigate('ListaProdutos')}>
        <Text style={{color: 'white', fontSize: 40}}>
          Lista de Detalhe dos produtos
        </Text>
      </Pressable>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator initialRouteName="ListaProdutos">
          <Stack.Screen
            name="ProductList"
            component={ProductList}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="DetalhesDoProduto"
            component={DetalhesProduto}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});

export default App;
