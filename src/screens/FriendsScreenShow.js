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

import {
  collection,
  getDocs,
  onSnapshot,
  query,
} from "firebase/firestore";
import { db } from "../services/firebaseConfig";
import { Timestamp } from 'firebase/firestore';

const FriendsScreenShow = () => {
  const { width, height } = Dimensions.get("window");
  const [AmigosA, setAmigosA] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const catchCollection = async () => {
    const querySnapshot = await getDocs(collection(db, 'Amigos'));
    let AmigosA = [];

    querySnapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
      let AmigosB = { id: doc.id, ...doc.data() };
      AmigosA.unshift(AmigosB);
    });

    return AmigosA;
  };

  const carregarCatchCollection = useCallback(async () => {
    try {
      const collectionAmigos = await catchCollection();

      collectionAmigos.sort((a, b) => b.timestamp - a.timestamp);

      setAmigosA(collectionAmigos);
      setRefreshing(false);
    } catch (error) {
      console.error(error);
      setRefreshing(true);
    }
  }, []);

  const carregarCatchCollectionRealTime = async () => {
    const ref = query(collection(db, 'Amigos'));
    onSnapshot(ref, (querySnapshot) => {
      const newAmigosA = [];
      querySnapshot.forEach((doc) => {
        newAmigosA.unshift({ id: doc.id, ...doc.data() });
      });


      newAmigosA.sort((a, b) => b.timestamp - a.timestamp);

      setAmigosA(newAmigosA);
    });
  }

  useEffect(() => {
    carregarCatchCollectionRealTime()
    carregarCatchCollection(setAmigosA)
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
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
        {AmigosA.map((AmigosB, index) => (
          <Animated.View
            key={index}
            style={{
              padding: 25,
              borderRadius: 10,
              alignSelf: 'flex-start',
              marginBottom: 20,
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
                <Text style={{ color: 'white', fontSize: 18, textShadowColor: 'rgba(0, 0, 0, 0.7)', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 4 }}>
                  {AmigosB.mensagem}</Text>
                {AmigosB.timestamp && (
                  <Text style={{ color: '#00FFFF', textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 4 }}>
                    Postado em: {AmigosB.timestamp instanceof Timestamp ? AmigosB.timestamp.toDate().toLocaleString() : ''}
                  </Text>
                )}

                {AmigosB.imagem && (
                  <Image
                    style={{ width: 200, height: 200 }}
                    source={{ uri: AmigosB.imagem }}
                  />
                )}
                <Animated.View></Animated.View>
              </Animated.View>
            </BlurView>
          </Animated.View>
        ))}
      </ScrollView>
    </Animated.View>
  );
};
export default FriendsScreenShow;
