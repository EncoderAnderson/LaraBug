import React from "react";
import { Text, View, Image, TouchableOpacity, Dimensions, Animated, StatusBar, TextInput } from 'react-native';
import Styles from "../styles/Styles";
import { useState, useEffect } from "react";
import { BlurView } from "expo-blur";
import MainScreenShow from "./MainScreenShow";
import Ionicons from '@expo/vector-icons/Ionicons';



const MainScreen = () => {
    const [text, setText] = useState("");
    const [buttonMic, setButtonMic] = useState("true");
    const { width, height } = Dimensions.get("window");


    const handleTextChange = (newText) => {
        setText(newText);
    }


    return (
        <Animated.View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }}>
            <StatusBar
                backgroundColor="#FF00FF" // Define a cor de fundo da StatusBar
                barStyle="light-content" // Define o estilo do texto (claro)
            />
            <Image
                source={require("../../assets/LaraMain.png")}
                style={{ width: width, height: height, resizeMode: 'cover', position: 'absolute' }}
            />


            <Animated.View style={{ padding: 25, borderRadius: 10 }}>
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


                    <TouchableOpacity>
                        <View>
                            <Text style={Styles.TextWhite}>
                                Meu Diário
                            </Text>
                        </View>
                    </TouchableOpacity>


                </BlurView>
            </Animated.View>
            <Animated.View style={{ position: "absolute", top: height * 0.125 }}>
                <MainScreenShow />
            </Animated.View>

            <View style={{ flexDirection: 'column-reverse', width: width * 0.83, height: height * 0.15, justifyContent: 'flex-end', alignSelf: 'center', top: height * 0.83, position: 'absolute' }}>
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


                    <TouchableOpacity>
                        <View>

                            <TextInput
                                style={{}}
                                placeholder="Escreva sua mensagem"
                                onChangeText={handleTextChange}

                            />

                        </View>
                    </TouchableOpacity>


                </BlurView>
            </View>


            <View style={{ position: 'absolute', bottom: height * 0.120, left: width * 0.8 }}>
                <TouchableOpacity>
                    <Image
                        source={require('../../assets/UnicornButtonPlay.png')}
                        style={{ height: 50, width: 50, resizeMode: 'center' }}
                    />
                </TouchableOpacity>
            </View>




            <View style={{ position: 'absolute', top: height * 0.028, right: width * 0.205 }}>
                <Image
                    source={require('../../assets/UnicornComponents.png')}
                    style={{ height: 50, width: 50, resizeMode: 'center' }}
                />
            </View>


            <View style={{ position: 'absolute', bottom: height * 0.13, right: width * 0.30 }}>
                <TouchableOpacity

                >
                    <Ionicons
                        name={buttonMic ? 'mic-outline' : 'mic-sharp'}
                        size={30} color="#00FFFF"
                    />
                </TouchableOpacity>
            </View>

            <View style={{ position: 'absolute', bottom: height * 0.13, right: width * 0.20 }}>
                <TouchableOpacity

                >
                    <Ionicons
                        name={buttonMic ? 'camera-outline' : 'camera'}
                        size={30} color="#00FFFF"
                    />
                </TouchableOpacity>
            </View>

        </Animated.View>

    )
}
export default MainScreen;