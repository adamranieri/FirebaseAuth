import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'
import { initializeApp } from 'firebase/app';

initializeApp({authDomain:'community-library-ranieri.firebaseapp.com', apiKey:'AIzaSyAUWyYHWfUnLvfkHpIS7O5AWm3vF9357hE'});
const googProvider = new GoogleAuthProvider();
const auth = getAuth()

async function login(){
  const credentials = await signInWithPopup(auth,googProvider);
  console.log(credentials)
}

ReactDOM.render(
  <React.StrictMode>
    <h1>Hello</h1>

    <button onClick={login}>Log In</button>
    
  </React.StrictMode>,
  document.getElementById('root')
);

