import {initializeApp} from 'firebase/app'
import {getAuth,GithubAuthProvider, GoogleAuthProvider} from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdIfRmlydMT5eyHXj-7UKZ7kPahCJVcBo",
  authDomain: "conventia-application.firebaseapp.com",
  projectId: "conventia-application",
  storageBucket: "conventia-application.appspot.com",
  messagingSenderId: "67422949635",
  appId: "1:67422949635:web:4aece0e9e0af9744479936"
};

// Initialize Firebase
const app=initializeApp(firebaseConfig)
export const auth=getAuth(app)