import { collection, getDoc, getDocs, addDoc } from 'firebase/firestore';
import { db } from './firebase';

export async function getCollection(collect) {
  const getCol = collection(db, collect);
  const collectionSnapshot = await getDocs(getCol);
  const collectionList = collectionSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return collectionList;
}

export async function createDocument(collectionName, data) {
  const docRef = await addDoc(collection(db, collectionName), data);
  const docSnap = await getDoc(docRef);
  return { id: docRef.id, ...docSnap.data() };
}
