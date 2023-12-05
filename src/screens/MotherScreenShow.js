import React, { useState, useEffect, useCallback } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Animated,
  StatusBar,
  ScrollView,
  RefreshControl
} from 'react-native';
import Styles from "../styles/Styles";
import { BlurView } from "expo-blur";
import { collection, getDocs, addDoc, serverTimestamp, Timestamp, deleteDoc, updateDoc, doc, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../services/firebaseConfig";


const MotherScreenShow = () => {
  const { width, height } = Dimensions.get("window");
  const [MaeA, setMaeA] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const catchCollection = async () => {
    const querySnapshot = await getDocs(collection(db, 'Mae'));
    let MaeA = [];

    querySnapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
      let MaeB = { id: doc.id, ...doc.data() };
      MaeA.unshift(MaeB);
    });

    return MaeA;
  };

  const carregarCatchCollection = useCallback(async () => {
    try {
      const collectionMae = await catchCollection();
      setMaeA(collectionMae);
      setRefreshing(false); // Termina a animação de atualização
    } catch (error) {
      console.error(error)
      setRefreshing(true); // Termina a animação de atualização em caso de erro
    }
  }, []);



  const carregarCatchCollectionRealTime = async () => {
    const ref = query(collection(db, 'Mae'))
    onSnapshot(ref, (querySnapshot) => {
      const newMaeA = [] // Crie um novo array para as mensagens atualizadas
      querySnapshot.forEach((doc) => {
        newMaeA.unshift({ id: doc.id, ...doc.data() }); // Use unshift para adicionar no início
      });


      newMaeA.sort((a, b) => b.timestamp - a.timestamp);

      setMaeA(newMaeA);
    });
  }

  useEffect(() => {
    carregarCatchCollectionRealTime()
    carregarCatchCollection(setMaeA)
  }, []);

  const onRefresh = () => {
    setRefreshing(true); // Inicia a animação de atualização
    carregarCatchCollection();

  };

  return (
    <Animated.View style={{ flex: 1 }}>
      <StatusBar
        backgroundColor="#FF00FF"
        barStyle="light-content"
      />
      <ScrollView
        style={{ height: height * 0.66, width: width * 0.9 }}
        decelerationRate={"normal"}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        {MaeA.map((MaeB, index) => (
          <Animated.View
            key={index}
            style={{
              padding: 25,
              borderRadius: 10,
              alignSelf: 'flex-start',
              marginBottom: 20, // Espaço entre os itens
            }}
          >
            <BlurView
              style={[
                {
                  padding: 5,
                  paddingTop: 5,
                  borderTopWidth: 3,
                  borderBottomWidth: 3,
                  borderLeftWidth: 3,
                  borderRightWidth: 3,
                  borderRadius: 10,
                  borderLeftColor: '#FF00FF',
                  borderRightColor: '#FF00FF',
                  borderTopColor: '#00FFFF',
                  borderBottomColor: '#FF00FF',
                },
              ]}
            >
              <Animated.View>
                <Text style={{ color: 'white', fontSize: 18, textShadowColor: 'rgba(0, 0, 0, 0.7)', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 4 }}>{MaeB.mensagem}</Text>
                {MaeB.timestamp && (
                  <Text style={{ color: '#00FFFF', textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 4 }}>
                    Postado em: {MaeB.timestamp instanceof Timestamp ? MaeB.timestamp.toDate().toLocaleString() : ''}
                  </Text>
                )}


                {MaeB.imagem && (
                  <Image
                    style={{ width: 200, height: 200 }}
                    source={{ uri: MaeB.imagem }} // Use o URL da imagem do documento
                  />
                )}
                <Animated.View>


                </Animated.View>
              </Animated.View>
            </BlurView>
          </Animated.View>
        ))}
      </ScrollView>
    </Animated.View>
  );
};

export default MotherScreenShow;