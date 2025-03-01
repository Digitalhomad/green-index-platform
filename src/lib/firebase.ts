import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAV0w9MzHlI7VQohSR1kV7NoXwRKCfkGOc",
  authDomain: "green-index-ee11a.firebaseapp.com",
  projectId: "green-index-ee11a",
  storageBucket: "green-index-ee11a.firebasestorage.app",
  messagingSenderId: "643471751138",
  appId: "1:643471751138:web:cbe778bc953f3f10c02bbb",
  measurementId: "G-GL32QDQKGE"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
