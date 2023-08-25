// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAVs9lLOGTXs4_eQ2FjBWWfwkSio-a_iB4',
	authDomain: 'reactecommercesite-4730f.firebaseapp.com',
	projectId: 'reactecommercesite-4730f',
	storageBucket: 'reactecommercesite-4730f.appspot.com',
	messagingSenderId: '332589833678',
	appId: '1:332589833678:web:7e4a1a6110f846f2e1df9f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
