import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image } from "react-native";
import { Dimensions } from "react-native";
import { BlurView } from 'expo-blur';
import Styles from "../styles/Styles";
import FriendsScreen from '../screens/FriendsScreen';
import FatherScreen from '../screens/FatherScreen';
import MainScreen from '../screens/MainScreen';
import MotherScreen from '../screens/MotherScreen';
import PetsScreen from '../screens/PetsScreen';


const { width, height } = Dimensions.get("window");

const Tab = createBottomTabNavigator();
const ProfileTabIcon = ({ focused, size, profileSelected }) => (

  <View style={{ alignItems: "center", alignSelf: 'center', backgroundColor: 'white' }}>

    <Image
      source={require('../../assets/LaraSalve.png')}

      style={{
        width: size * 1.2, height: size * 1.2, position: 'absolute', borderWidth: 2, bottom: -width * 0.025,
        borderRadius: 50, // Para tornar a imagem redonda
        borderColor: "white", // Cor da borda
        shadowColor: "#00FFFF", // Cor da sombra roxa com 50% de transparência
        shadowOffset: { width: 100, height: 100 }, // Deslocamento da sombra
        shadowRadius: 30, // Raio da sombra
        shadowOpacity: 1, // Opacidade da sombra
        shadowOpacity: profileSelected ? 2 : 0.5, // Altere a opacidade com base na seleção

      }} />
  </View>

);

export default function Routes() {

  const [activeScreen, setActiveScreen] = useState(""); // Declare a variável activeScreen


  return (
    <Tab.Navigator initialRouteName="MainScreen"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'FriendsScreen') {
            iconName = focused ? 'body-sharp' : 'body-outline';
          }

          else if (route.name === 'FatherScreen') {
            iconName = focused ? 'man' : 'man-outline';
          }

          else if (route.name === 'MainScreen') {
            return <ProfileTabIcon focused={focused ? '#FFF' : '#f8f8f8'} size={45}
            />;
          }

          else if (route.name === 'MotherScreen') {
            iconName = focused ? 'woman-sharp' : 'woman-outline';
          }

          else if (route.name === 'PetsScreen') {
            iconName = focused ? 'paw' : 'paw-outline';
          }

          return (
            <Ionicons
              name={iconName}
              size={35}
              color={color}
              style={{

                top: -height * 0.03,
                shadowColor: focused ? 'white' : 'gray', // Cor da sombra
                shadowOffset: { width: 5, height: 5 }, // Tamanho da sombra
                shadowOpacity: focused ? 1 : 0.5, // Opacidade da sombra
                shadowRadius: 100, // Raio da sombra
                marginBottom: -15,

              }}
            />
          );
        },
        tabBarOnPress: ({ navigation, route }) => {
          setActiveScreen(route.name);
          navigation.navigate(route.name);
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#FF00FF',
        tabBarStyle: {

          marginTop: -height * 0.05,
          height: height * 0.04,
          backgroundColor: '#00FFFF',
          borderTopWidth: 2,
          borderBottomWidth: 4,
          borderLeftWidth: 4,
          borderRightWidth: 4,
          borderRadius: 10,
          borderLeftColor: '#FF00FF',
          borderBottomColor: "#FF00FF",
          borderTopColor: "#A020F0",
          borderRightColor: "#FF00FF",
          shadowColor: '#A020F0',
          shadowOffset: { width: 5, height: 5 },
          shadowOpacity: 1,
          shadowRadius: 20,

        },
        tabBarBackground: () => (
          <BlurView tint="dark" intensity={100} style={{}} />
        ),

      })}
    >

      <Tab.Screen
        name="FriendsScreen"
        component={FriendsScreen}
        options={{ headerShown: false }} // Remover o cabeçalho 
      />

      <Tab.Screen
        name="FatherScreen"
        component={FatherScreen}
        options={{ headerShown: false }} // Remover o cabeçalho
      />

      <Tab.Screen
        name="MainScreen"
        component={MainScreen}
        options={{ headerShown: false }} // Remover o cabeçalho 
      />

      <Tab.Screen
        name="MotherScreen"
        component={MotherScreen}
        options={{ headerShown: false }} // Remover o cabeçalho
      />

      <Tab.Screen
        name="PetsScreen"
        component={PetsScreen}
        options={{ headerShown: false }} // Remover o cabeçalho
      />

    </Tab.Navigator>
  )
}
