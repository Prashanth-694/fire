import logo from './logo.svg';
import React from 'react';
import './App.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/messaging';
import 'firebase/compat/functions';

function App() {

  React.useEffect(()=>{
    var firebaseConfig = {
      apiKey: "AIzaSyCSv_tbFCz1-Ij-IlHDaQ0BTbM3G24dbpU",
      authDomain: "push-notify-feae9.firebaseapp.com",
      projectId: "push-notify-feae9",
      storageBucket: "push-notify-feae9.appspot.com",
      messagingSenderId: "907834086531",
      appId: "1:907834086531:web:746af194053fdb89cf37b6"
    };
    
    // Initialize Firebase
    const firebaseApp =firebase.initializeApp(firebaseConfig);
  
const db = firebaseApp.firestore();
const auth = firebase.auth();
    const msg=firebase.messaging()
    
    
       msg.getToken().then((data)=>{
      console.log("token",data)
    })
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
