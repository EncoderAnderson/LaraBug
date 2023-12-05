import React, { useState, useEffect } from "react";
import { Text, View, Image, TouchableOpacity, Dimensions, Animated, StatusBar, TextInput } from 'react-native';
import Styles from "../styles/Styles";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import Ionicons from '@expo/vector-icons/Ionicons';

const { width, height } = Dimensions.get("window");

const HomeScreen = ({ navigation }) => {
  const [activityButton, setActivityButton] = useState();
  const [activityButton2, setActivityButton2] = useState();
  const [activityButton3, setActivityButton3] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayText, setDisplayText] = useState("✍");
  const fadeInOutAnim = useState(new Animated.Value(0))[0];
  const [isLoading, setIsLoading] = useState(false);
  const [fadeInAnim] = useState(new Animated.Value(0));
  const [isBugIcon1Filled, setIsBugIcon1Filled] = useState(true);
  const [isBugIcon2Filled, setIsBugIcon2Filled] = useState(true);
  const [isBugIcon3Filled, setIsBugIcon3Filled] = useState(true);
  const [user, setUser] = useState(null);


  useEffect(() => {
    // Inicia a animação de fadeIn quando o componente for montado
    Animated.timing(fadeInAnim, {
      toValue: 1,
      duration: 1000, // 1000 milissegundos = 1 segundo
      useNativeDriver: true, // Use o driver nativo para animações mais suaves
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
        setDisplayText(displayText === "✍" ? "✍" : "✍");

        Animated.timing(fadeInOutAnim, {
          toValue: 1,
          duration: 50,
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


  useEffect(() => {
    // Efeito setTimeout para navegar após um atraso
    const timer = setTimeout(() => {
      // Verifique se o usuário está logado antes de navegar
      if (!user) {
        navigation.navigate('LoginScreen');
      }
    }, 6000);

    return () => clearTimeout(timer);
  }, [user, navigation]);

  useEffect(() => {
    // Verifique se o usuário está logado e redirecione para a página apropriada
    if (user) {
      navigation.navigate('InitialScreen');
    }
  }, [user, navigation]);



  return (
    <Animated.View style={[Styles.ContainerP2, { opacity: fadeInAnim }]}>


      <Animated.View style={{ opacity: fadeInAnim }}>
        <StatusBar
          backgroundColor="#FF00FF" // Define a cor de fundo da StatusBar
          barStyle="light-content" // Define o estilo do texto (claro)
        />
        <Image
          source={require('../../assets/HomeScreen.png')}
          style={{ width: width, height: height, resizeMode: 'cover' }}
        />
      </Animated.View>


      <Animated.View style={{ alignSelf: 'center', top: -height * 0.05, opacity: fadeInOutAnim }}>
        <TouchableOpacity onPress={toggleBugIcon2}>
          <Ionicons name={isBugIcon1Filled ? "power-sharp" : "power-sharp"} size={30} color="#00FFFF" />
        </TouchableOpacity>
      </Animated.View>



      <Animated.View style={{ borderRadius: 10, top: -height * 0.52, opacity: fadeInOutAnim, alignItems: 'center' }}>

        <Animated.View style={{ justifyContent: 'center', flexDirection: 'row-reverse', top: height * 0.30 }}>
          <TouchableOpacity onPress={toggleBugIcon1}>
            <Image
              source={require('../../assets/UnicornTop.png')} // Corrigir a exibição da imagem
              style={{ width: 77, height: 77, backgroundColor: 'transparent' }} // Definir o tamanho da imagem
            />
          </TouchableOpacity>
        </Animated.View>



        <Animated.View style={{ borderRadius: 10, top: height * 0.26, alignItems: 'center' }}>
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



    </Animated.View>
  );
};
export default HomeScreen;
