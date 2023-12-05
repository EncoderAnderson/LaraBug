import React, { useState, useEffect } from "react";
import { Text, View, Image, TouchableOpacity, Dimensions, Animated, StatusBar, TextInput } from 'react-native';
import Styles from "../styles/Styles";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { auth } from "../services/firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const { width, height } = Dimensions.get("window");

const LoginScreen = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayText, setDisplayText] = useState("LaraBug");
  const fadeInOutAnim = useState(new Animated.Value(0))[0];
  const [isLoading, setIsLoading] = useState(false);
  const [fadeInAnim] = useState(new Animated.Value(0));
  const [isBugIcon1Filled, setIsBugIcon1Filled] = useState(true);
  const [isBugIcon2Filled, setIsBugIcon2Filled] = useState(true);
  const [isBugIcon3Filled, setIsBugIcon3Filled] = useState(true);
  const navigation = useNavigation();
  const [customErrorMessage, setCustomErrorMessage] = useState("");


  useEffect(() => {
    // Inicia a animação de fadeIn quando o componente for montado
    Animated.timing(fadeInAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    const toggleText = () => {
      setIsLoading(true);

      Animated.timing(fadeInOutAnim, {
        toValue: 0,
        duration: 100,
        useNativeDriver: false,
      }).start(() => {
        setDisplayText(displayText === "LaraBug" ? "LaraBug" : "LaraBug");

        Animated.timing(fadeInOutAnim, {
          toValue: 1,
          duration: 100,
          useNativeDriver: false,
        }).start(() => {
          setIsLoading(false);
        });
      });
    };

    const interval = setInterval(toggleText, 1000);
    return () => clearInterval(interval);
  }, [displayText, fadeInOutAnim]);

  const toggleBugIcon1 = () => {
    setIsBugIcon1Filled(!isBugIcon1Filled);
  };

  const toggleBugIcon2 = () => {
    setIsBugIcon2Filled(!isBugIcon2Filled);
  };

  const toggleBugIcon3 = () => {
    setIsBugIcon3Filled(!isBugIcon3Filled);
  };



  const handleBug2 = () => {
    navigation.navigate("InitialScreen"); // Remova o sinal de igual (=) aqui
  }



  const Login = async () => {
    await signInWithEmailAndPassword(auth, email, password)
      .then(value => {
        navigation.navigate('InitialScreen')
        console.log("\n" + value.user.uid.email);

      })
      .catch((error) => {
        let errorMessage = error.message; // Mensagem de erro original
        setCustomErrorMessage("Algo está errado..."); // Mensagem personalizada
        console.log(errorMessage);
      });
  };



  return (
    <Animated.View style={{ flex: 1, justifyContent: 'center', flexDirection: 'column', opacity: fadeInAnim }}>
      <StatusBar
        backgroundColor="#FF00FF"
        barStyle="light-content"
      />
      <Image
        source={require("../../assets/BackgroundUnicorn.png")}
        style={{ width: width, height: height, resizeMode: 'cover', position: 'absolute' }}
      />




      <Animated.View style={{ borderRadius: 10, top: height * 0.22, opacity: fadeInOutAnim, alignItems: 'center' }}>

        <Animated.View style={{ justifyContent: 'center', flexDirection: 'row-reverse', top: height * 0.30 }}>
          <TouchableOpacity onPress={toggleBugIcon1}>
            <Image
              source={require('../../assets/UnicornTop.png')} // Corrigir a exibição da imagem
              style={{ width: 77, height: 77, backgroundColor: 'transparent' }} // Definir o tamanho da imagem
            />
          </TouchableOpacity>
        </Animated.View>



        <Animated.View style={{ borderRadius: 10, top: height * 0.26, alignItems: 'center', opacity: fadeInOutAnim }}>
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
            borderBottomColor: '#FF00FF',
          }]}>
            <TouchableOpacity>
              <View>
                <Text style={Styles.TextWhite}>
                  LaraBug
                </Text>
              </View>
            </TouchableOpacity>
          </BlurView>
        </Animated.View>

      </Animated.View>



      <Animated.View style={{ justifyContent: 'center', borderRadius: 10, top: height * 0.15, opacity: fadeInAnim, width: "80%", alignSelf: 'center' }}>
        <BlurView style={[{
          padding: 5, paddingTop: 3,
          borderTopWidth: 1.5,
          borderBottomWidth: 3,
          borderLeftWidth: 3,
          borderRightWidth: 3,
          borderRadius: 10,
          borderLeftColor: '#FF00FF',
          borderRightColor: '#FF00FF',
          borderTopColor: '#00FFFF',
          borderBottomColor: '#FF00FF',
        }]}>
          <TouchableOpacity>
            <View>
              <TextInput
                style={{
                  fontSize: 17
                }}
                placeholder="Digite o Email"
                value={email}
                onChangeText={text => setEmail(text)}
                secureTextEntry={false}
              />
            </View>
          </TouchableOpacity>
        </BlurView>
      </Animated.View>

      <Animated.View style={{ justifyContent: 'center', borderRadius: 10, top: height * 0.19, opacity: fadeInAnim, width: "80%", alignSelf: 'center' }}>
        <BlurView style={[{
          padding: 5, paddingTop: 3,
          borderTopWidth: 1.5,
          borderBottomWidth: 3,
          borderLeftWidth: 3,
          borderRightWidth: 3,
          borderRadius: 10,
          borderLeftColor: '#FF00FF',
          borderRightColor: '#FF00FF',
          borderTopColor: '#00FFFF',
          borderBottomColor: '#FF00FF',
        }]}>
          <TouchableOpacity>
            <View>
              <TextInput
                style={{
                  fontSize: 17
                }}
                placeholder="Digite a Senha"
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry={true}
              />
            </View>
          </TouchableOpacity>
        </BlurView>
      </Animated.View>


      <Animated.View style={{ justifyContent: 'center', flexDirection: 'row-reverse', top: height * 0.38, opacity: fadeInOutAnim }}>
        <TouchableOpacity onPress={handleBug2}>
          <Ionicons name={isBugIcon1Filled ? "power-sharp" : "power-sharp"} size={30} color="#00FFFF" />
        </TouchableOpacity>
      </Animated.View>




      <Animated.View style={{ justifyContent: 'center', flexDirection: 'row-reverse', alignSelf: 'flex-end', right: width * 0.12, opacity: fadeInAnim, bottom: -height * 0.003 }}>
        <TouchableOpacity onPress={toggleBugIcon2}>
          <Ionicons name={isBugIcon2Filled ? "bulb-outline" : "bulb-sharp"} size={30} color="#00FFFF" />
        </TouchableOpacity>
      </Animated.View>

      <Animated.View style={{ justifyContent: 'center', flexDirection: 'row-reverse', alignSelf: 'flex-end', right: width * 0.12, bottom: -height * 0.055, opacity: fadeInAnim }}>
        <TouchableOpacity onPress={toggleBugIcon3}>
          <Ionicons name={isBugIcon3Filled ? "eye-off-outline" : "eye-sharp"} size={30} color="#00FFFF" />
        </TouchableOpacity>
      </Animated.View>



      <View>
        {customErrorMessage !== "" && (
          <View style={[{ position: 'relative' }, { justifyContent: "center" }, { alignItems: 'center' }, { alignSelf: 'center' }, { bottom: height * -0.070 }]}>

            <Animated.Text style={[Styles.TextPurple, { opacity: fadeInOutAnim }, { alignSelf: 'center' }]}>
              {customErrorMessage}
            </Animated.Text>

          </View>


        )}

      </View>



    </Animated.View>


  )
}
export default LoginScreen;
