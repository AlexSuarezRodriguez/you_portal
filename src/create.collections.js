import { collection, getDoc, getDocs, addDoc, setDoc, doc } from 'firebase/firestore';
import { db } from './firebase';
// import { useAuth } from './context/authContext';

export async function getCollection(collectionName) {
  // const { user } = useAuth();
  const col = collection(db, collectionName);
  const snapshot = await getDocs(col);
  // eslint-disable-next-line no-shadow
  const docList = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return docList;
}

export async function createDocument(collectionName, data) {
  const docRef = await addDoc(collection(db, collectionName), data);
  const docSnap = await getDoc(docRef);
  return { id: docRef.id, ...docSnap.data() };
}

export async function setDocument(collectionName, data) {
  const docRef = await setDoc(doc(db, collectionName, data.uid), data);
  return docRef;
}

export async function getDocument(collectionName, id) {
  const docRef = doc(db, collectionName, id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return null;
  }
  return docSnap.data();
}
