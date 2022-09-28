// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCa-7g9l7RDCT3T_yc0EMAi13EiIjDajKM',
  authDomain: 'discord-clone-2709.firebaseapp.com',
  projectId: 'discord-clone-2709',
  storageBucket: 'discord-clone-2709.appspot.com',
  messagingSenderId: '355641614746',
  appId: '1:355641614746:web:40bc421b843c8ba83d1a23',
  measurementId: 'G-7M588JPQWM',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();
