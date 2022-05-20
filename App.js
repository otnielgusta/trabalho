import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cadastro from './lib/cadastro/cadastro';
import ConfirmaCadastro from './lib/cad_concluido/cad_concluido';
import Login from './lib/login/login';
import SplashPage from './lib/splash/splash_page';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Splash'
        screenOptions={{headerShown: false}}
        >
        <Stack.Screen 
          name='Splash'
          component={SplashPage}
          
        />
         <Stack.Screen 
          name='Login'
          component={Login}
          
        />
        <Stack.Screen 
          name='Cadastro'
          component={Cadastro}
        />
        <Stack.Screen 
          name='ConfirmaCadastro'
          component={ConfirmaCadastro}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
  //<View style={styles.container}>
      //<Login />
      //</View>
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#312E38',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
