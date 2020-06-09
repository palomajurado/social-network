const firebaseConfig = {
  measurementId: "G-T5XZ91CCHV",
  messagingSenderId: "113004416024",
  projectId: "social-network-lima-topia",
  apiKey: "AIzaSyAZi1Sk7_FpqO0dMwurK0lxAJP0qbpmsQM",
  appId: "1:113004416024:web:15077151e4ded9aa07c76d",
  storageBucket: "social-network-lima-topia.appspot.com",
  authDomain: "social-network-lima-topia.firebaseapp.com",
  databaseURL: "https://social-network-lima-topia.firebaseio.com",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
export const functions = firebase.functions();
export const storageRef = firebase.storage().ref();
