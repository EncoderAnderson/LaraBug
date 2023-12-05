
import { db } from './firebaseConfig';
import { collection, addDoc, Timestamp, deleteDoc, updateDoc, doc, query, where, onSnapshot } from 'firebase/firestore';


const sendMessenger = async (mensagem) => {
    try {
        await addDoc(collection(db, 'Pets'), mensagem)
    } catch (error) {
        console.log(error);
    }

}
export default sendMessenger;

