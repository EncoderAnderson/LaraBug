import React from "react";
import { Text, View, Image, TouchableOpacity, Dimensions, Animated, StatusBar, TextInput } from 'react-native';
import Styles from "../styles/Styles";
import { useState, useEffect } from "react";
import { BlurView } from "expo-blur";
import PetsScreenShow from './PetsScreenShow';
import sendMessenger from '../services/firestorePets';
import { useNavigation } from "@react-navigation/native";
import * as FileSystem from 'expo-file-system';
import { Audio } from "expo-av";
import * as ImagePicker from 'expo-image-picker';
import { db } from "../services/firebaseConfig";
import { getStorage, ref, uploadString, getDownloadURL, collection, addDoc, getDocs, doc, updateDoc, deletDoc, query, onSnapshot, } from 'firebase/storage';
import Ionicons from '@expo/vector-icons/Ionicons';


const PetsScreen = () => {
  const { width, height } = Dimensions.get("window");
  const [text, setText] = useState("");
  const [buttonMic, setButtonMic] = useState(true);
  const [mensagem, setMensagem] = useState('');
  const navigation = useNavigation();
  const [refreshControl, serRefreshControl] = useState(false);
  const [recording, setRecording] = useState(null);
  const [recordingStatus, setRecordingStatus] = useState('idle');
  const [audioPermission, setAudioPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [timestamp, setTimestamp] = useState('');


  const saveMessage = async () => {
    if (mensagem === '') {
      return;
    }

    // Obtenha a data e hora atual do servidor em formato UTC
    const resultado = await sendMessenger({
      mensagem,
      timestamp: new Date(), // Envie o timestamp junto com a mensagem
    });


    if (resultado === 'error') {
      Alert.alert('Erro ao criar produto');
    } else {
      // Limpar o texto do input após a mensagem ser enviada com sucesso
      setMensagem(''); // Supondo que você esteja usando um estado para controlar o texto do input
    }
  };

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) { // Atualizado para usar "canceled"
        setImage(result.assets[0].uri);
      }
    } catch (error) {
      console.error("Erro ao selecionar a imagem:", error);
    }
  };

  const salvarPost = async (setImage) => {
    try {
      const result = await addDoc(collection(db,
        'Pets'));
      return result.id
    } catch (error) {
      console.log('erro ao adicionar post', error)
    }

  }


  return (
    <Animated.View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }}>
      <StatusBar
        backgroundColor="#FF00FF" // Define a cor de fundo da StatusBar
        barStyle="light-content" // Define o estilo do texto (claro)
      />
      <Image
        source={require("../../assets/LaraPets.png")}
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
                Pets e Eu
              </Text>
            </View>
          </TouchableOpacity>


        </BlurView>
      </Animated.View>
      <Animated.View style={{ position: "absolute", top: height * 0.125 }}>
        <PetsScreenShow />
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
                style={{ fontSize: 16 }}
                placeholder="Escreva sua mensagem"
                onChangeText={text => setMensagem(text)}
                value={mensagem}

              />

            </View>
          </TouchableOpacity>


        </BlurView>
      </View>


      <View style={{ position: 'absolute', bottom: height * 0.120, left: width * 0.8 }}>
        <TouchableOpacity
          onPress={() => saveMessage()}
        >
          <Image
            source={require('../../assets/UnicornButtonPlay.png')}
            style={{ height: 50, width: 50, resizeMode: 'center' }}
          />
        </TouchableOpacity>
      </View>




      <View style={{ position: 'absolute', top: height * 0.028, right: width * 0.23 }}>
        <Image
          source={require('../../assets/UnicornComponents.png')}
          style={{ height: 50, width: 50, resizeMode: 'center' }}
        />
      </View>


      <View style={{ position: 'absolute', bottom: height * 0.13, right: width * 0.30 }}>
        <TouchableOpacity
          onPress={salvarPost}
        >
          <Ionicons
            name={buttonMic ? 'mic-outline' : 'mic-sharp'}
            size={30} color="#00FFFF"
          />
        </TouchableOpacity>
      </View>

      <View style={{ position: 'absolute', bottom: height * 0.13, right: width * 0.20 }}>
        <TouchableOpacity
          onPress={pickImage}
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
export default PetsScreen;