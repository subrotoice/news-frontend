// Import the necessary functions from Firebase SDK (v9 Modular Syntax)
import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8ehawlsWmF8r0kb4qWL7wSNsh6HVywVQ",
  authDomain: "breaking-news-cfbca.firebaseapp.com",
  projectId: "breaking-news-cfbca",
  storageBucket: "breaking-news-cfbca.appspot.com",
  messagingSenderId: "371790083227",
  appId: "1:371790083227:web:4da5c666899abe60a2c23e",
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Export Firebase Auth and Google Auth Provider
export const authFirebase = getAuth(); // Get Firebase Auth instance

// Initialize Google and GitHub providers
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
