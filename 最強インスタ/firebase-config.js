// 🔧 firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyAHlUiXQjlUSJA4MCNavv3_ICl3LW7uA6s",
  authDomain: "links-d8049.firebaseapp.com",
  projectId: "links-d8049",
  storageBucket: "links-d8049.firebasestorage.app",
  messagingSenderId: "44494443603",
  appId: "1:44494443603:web:ccabe974503c6c6a8362a6",
  measurementId: "G-171EMRY1MM"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
