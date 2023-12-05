import React from "react";
import { Text, View, Image, TouchableOpacity, Dimensions, StatusBar } from 'react-native';
import Styles from "../styles/Styles";
import { useState, useEffect } from "react";
import Routes from "../routes/Routes";
import { LinearGradient } from 'expo-linear-gradient';


const { width, height } = Dimensions.get("window");

const InitialScreen = () => {
    return (


        <View style={[Styles.ContainerP, { backgroundColor: '#A020F0', position: 'relative', borderTopEndRadius: 10 }]}>

            <Routes />

        </View>

    )
}

export default InitialScreen;