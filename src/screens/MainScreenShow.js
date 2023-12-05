import React from "react";
import { Text, View, Image, TouchableOpacity, Dimensions, Animated, StatusBar } from 'react-native';
import Styles from "../styles/Styles";
import { useState, useEffect } from "react";
import { BlurView } from "expo-blur";
import { ScrollView } from "react-native";


const MainScreenShow = () => {
  const { width, height } = Dimensions.get("window");


  return (
    <Animated.View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }}>
      <StatusBar
        backgroundColor="#FF00FF" // Define a cor de fundo da StatusBar
        barStyle="light-content" // Define o estilo do texto (claro)
      />


      <ScrollView
        style={{ height: height * 0.66, width: width * 0.9 }}
        decelerationRate={"normal"}

      >


        <Animated.View style={{ padding: 25, borderRadius: 10, alignSelf: 'center' }}>
          <BlurView style={[{
            padding: 5, paddingTop: 5,
            borderTopWidth: 3,
            borderBottomWidth: 3,
            borderLeftWidth: 3,
            borderRightWidth: 3,
            borderRadius: 10,
            borderLeftColor: '#FF00FF',
            borderRightColor: '#FF00FF',
            borderTopColor: '#00FFFF',
            borderBottomColor: '#FF00FF'
          }]}>

            <Animated.View>
              <TouchableOpacity>
                <Image
                  source={require("../../assets/LaraMain.png")}
                  style={{ width: 100, height: 100 }}
                />

              </TouchableOpacity>
            </Animated.View>
          </BlurView>
        </Animated.View>


        <Animated.View style={{ padding: 25, borderRadius: 10, alignSelf: 'center' }}>
          <BlurView style={[{
            padding: 5, paddingTop: 5,
            borderTopWidth: 3,
            borderBottomWidth: 3,
            borderLeftWidth: 3,
            borderRightWidth: 3,
            borderRadius: 10,
            borderLeftColor: '#FF00FF',
            borderRightColor: '#FF00FF',
            borderTopColor: '#00FFFF',
            borderBottomColor: '#FF00FF'
          }]}>

            <Animated.View>
              <TouchableOpacity>
                <Image
                  source={require("../../assets/LaraMain.png")}
                  style={{ width: 100, height: 100 }}
                />

              </TouchableOpacity>
            </Animated.View>
          </BlurView>
        </Animated.View>


        <Animated.View style={{ padding: 25, borderRadius: 10, alignSelf: 'center' }}>
          <BlurView style={[{
            padding: 5, paddingTop: 5,
            borderTopWidth: 3,
            borderBottomWidth: 3,
            borderLeftWidth: 3,
            borderRightWidth: 3,
            borderRadius: 10,
            borderLeftColor: '#FF00FF',
            borderRightColor: '#FF00FF',
            borderTopColor: '#00FFFF',
            borderBottomColor: '#FF00FF'
          }]}>

            <Animated.View>
              <TouchableOpacity>
                <Image
                  source={require("../../assets/LaraMain.png")}
                  style={{ width: 100, height: 100 }}
                />

              </TouchableOpacity>
            </Animated.View>
          </BlurView>
        </Animated.View>


        <Animated.View style={{ padding: 25, borderRadius: 10, alignSelf: 'center' }}>
          <BlurView style={[{
            padding: 5, paddingTop: 5,
            borderTopWidth: 3,
            borderBottomWidth: 3,
            borderLeftWidth: 3,
            borderRightWidth: 3,
            borderRadius: 10,
            borderLeftColor: '#FF00FF',
            borderRightColor: '#FF00FF',
            borderTopColor: '#00FFFF',
            borderBottomColor: '#FF00FF'
          }]}>

            <Animated.View>
              <TouchableOpacity>
                <Image
                  source={require("../../assets/LaraMain.png")}
                  style={{ width: 100, height: 100 }}
                />

              </TouchableOpacity>
            </Animated.View>
          </BlurView>
        </Animated.View>


        <Animated.View style={{ padding: 25, borderRadius: 10, alignSelf: 'center' }}>
          <BlurView style={[{
            padding: 5, paddingTop: 5,
            borderTopWidth: 3,
            borderBottomWidth: 3,
            borderLeftWidth: 3,
            borderRightWidth: 3,
            borderRadius: 10,
            borderLeftColor: '#FF00FF',
            borderRightColor: '#FF00FF',
            borderTopColor: '#00FFFF',
            borderBottomColor: '#FF00FF'
          }]}>

            <Animated.View>
              <TouchableOpacity>
                <Image
                  source={require("../../assets/LaraMain.png")}
                  style={{ width: 100, height: 100 }}
                />

              </TouchableOpacity>
            </Animated.View>
          </BlurView>
        </Animated.View>


        <Animated.View style={{ padding: 25, borderRadius: 10, alignSelf: 'center' }}>
          <BlurView style={[{
            padding: 5, paddingTop: 5,
            borderTopWidth: 3,
            borderBottomWidth: 3,
            borderLeftWidth: 3,
            borderRightWidth: 3,
            borderRadius: 10,
            borderLeftColor: '#FF00FF',
            borderRightColor: '#FF00FF',
            borderTopColor: '#00FFFF',
            borderBottomColor: '#FF00FF'
          }]}>

            <Animated.View>
              <TouchableOpacity>
                <Image
                  source={require("../../assets/LaraMain.png")}
                  style={{ width: 100, height: 100 }}
                />

              </TouchableOpacity>
            </Animated.View>
          </BlurView>
        </Animated.View>


      </ScrollView>



    </Animated.View>

  )
}
export default MainScreenShow;