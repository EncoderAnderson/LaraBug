import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FatherScreen from './src/screens/FatherScreen';
import FriendsScreen from './src/screens/FriendsScreen';
import PetsScreen from './src/screens/PetsScreen';
import InitialScreen from './src/screens/InitialScreen';
import MainScreen from './src/screens/MainScreen';
import MotherScreen from './src/screens/MotherScreen';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';


const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName='HomeScreen'>

        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="FatherScreen"
          component={FatherScreen}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="MotherScreen"
          component={MotherScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='PetsScreen'
          component={PetsScreen}
          options={{ headerShown: false }} />

        <Stack.Screen
          name='FriendsScreen'
          component={FriendsScreen}
          options={{ headerShown: false }} />


        <Stack.Screen
          name="InitialScreen"
          component={InitialScreen}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }} />


      </Stack.Navigator>

    </NavigationContainer>
  );
};
export default App;