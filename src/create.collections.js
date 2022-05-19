import { collection, getDoc, getDocs, addDoc, setDoc, doc } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { db } from './firebase';

export async function getCollection(collectionName) {
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
export async function createUrlImage(e) {
  const imageLocal = e.target.files[0];
  const storage = getStorage();
  const storageRef = ref(storage, `images/${imageLocal}`);
  await uploadBytes(storageRef, imageLocal);
  const urlDescarga = await getDownloadURL(storageRef);
  return urlDescarga;
}
