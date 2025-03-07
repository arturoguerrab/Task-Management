import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const app = initializeApp({
  apiKey: "AIzaSyAKKImAJEYGTYqBIgeY5eYHjh_KTtPKItM",
  authDomain: "task-manager-6f2a1.firebaseapp.com",
  projectId: "task-manager-6f2a1",
  storageBucket: "task-manager-6f2a1.firebasestorage.app",
  messagingSenderId: "376106099974",
  appId: "1:376106099974:web:affc12f415580b7a0caa87",
});

export const firebaseAuth = getAuth(app);
export default app;
