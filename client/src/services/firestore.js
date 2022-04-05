import { initializeApp } from 'firebase/app';
import { 
  getFirestore,
  collection,
  getDocs, 
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const createVideo = (videoId) => {
  const videosCol = collection(db, 'videos');
  return addDoc(videosCol, {
    created: serverTimestamp(),
    videoId,
  });
};

export const getVideos = async() => {
  const videosCol = collection(db, 'videos');
  const itemsQuery = query(videosCol, orderBy('created'))
  const listSnapshot = await getDocs(itemsQuery);
  const list = listSnapshot.docs.map(doc => doc.data());
  return list;
}

export const streamVideos = (snapshot, error) => {
  const videosCol = collection(db, 'videos');
  const itemsQuery = query(videosCol, orderBy('created'))
  return onSnapshot(itemsQuery, snapshot, error);
};