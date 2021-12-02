// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyA5mCEaaGcmKAcYT6jkbjQMeOjPs8t9oLU',
	authDomain: 'make-a-wish-1c617.firebaseapp.com',
	projectId: 'make-a-wish-1c617',
	storageBucket: 'make-a-wish-1c617.appspot.com',
	messagingSenderId: '859777055010',
	appId: '1:859777055010:web:ed9636a08242baac300d7b',
	measurementId: 'G-M4JDRGJMTJ'
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth();

export { firebaseApp, db, auth };
