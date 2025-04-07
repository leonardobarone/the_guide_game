import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-H8bcc9wIXR8C2_kq6sPuGpTX7RPLsck",
  authDomain: "the-guide-game.firebaseapp.com",
  projectId: "the-guide-game",
  storageBucket: "the-guide-game.firebasestorage.app",
  messagingSenderId: "682883576037",
  appId: "1:682883576037:web:53e250c8cdfa29b178a40c",
  measurementId: "G-CTRGV9TJLM"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);

export {app, auth};