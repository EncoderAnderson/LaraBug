import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
  apiKey: "AIzaSyC5Aw3xESxEbSMizZ4LwXnV30R779l6MQE",
  authDomain: "larabug-847b5.firebaseapp.com",
  projectId: "larabug-847b5",
  storageBucket: "larabug-847b5.appspot.com",
  messagingSenderId: "280132444168",
  appId: "1:280132444168:web:93f45abc4276ae3feb31bd"
};
// Inicialize o Firebase
const app = initializeApp(firebaseConfig);
// Obtenha as instâncias do Auth e do Firestore
const auth = initializeAuth(app,
  { persistence: getReactNativePersistence(AsyncStorage) });
const db = getFirestore(app);
const storage = getStorage(app)


export { auth, db, storage };

