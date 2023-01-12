import React from 'react';
import { Button, Box } from '@chakra-ui/react'
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBnQYSVFCJyg_t3wWIqSTwBIODJLNvORTY",
  authDomain: "spare-room-18585.firebaseapp.com",
  projectId: "spare-room-18585",
  storageBucket: "spare-room-18585.appspot.com",
  messagingSenderId: "456784037469",
  appId: "1:456784037469:web:61768176fb0eb4a81e6fb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const Auth = ({changeLog}) => {
  const [failed, setFailed] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const authenticate = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      const user = userCredential.user;
      changeLog(user);
      })
      .catch((error) => {
        setFailed(true);
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  return (
    <Box display='flex' flexDir='column' alignItems='center'>
      <form>
    <label>
      Email:
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
    </label>
    <label>
      Password:
      <input value={password} onChange={(e) => setPassword(e.target.value)}type="password"  />
    </label>
  </form>
      <Button onClick={authenticate}color='tomato'>SIGN IN</Button>
      {failed && <Box color='tomato'>Invalid Credentials.</Box>}
    </Box>
  )
};

export default Auth;