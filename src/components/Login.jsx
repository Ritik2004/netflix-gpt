import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidate } from '../utils/validate';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../utils/firebase'
import { updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { user_avatar } from '../utils/constants';
const Login = () => {
  const[signIn,setsignIn] = useState(null);
  const[errorMessage,setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const changeForm = () => {
    setsignIn(!signIn);
  }
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
        const message = checkValidate(email.current.value,password.current.value);
        setErrorMessage(message);
        if(message) return;
        //Sign In/Sign up logic
         if(!signIn){
          //signup logic
          createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            const user = userCredential.user;
            // ...
            updateProfile(user, {
              displayName: name.current.value,
              photoURL: user_avatar
            }).then(() => {
           const {uid,email,displayName,photoURL} = auth.currentUser;
              dispatch(
                addUser({
                  uid:uid,email:email,displayName:displayName,photoURL:photoURL
                }))
            }).catch((error) => {
              // An error occurred
              // ...
              setErrorMessage(message);
            });
            
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode+ "-" +errorMessage)
            // ..
          });
         }
         else{
            //sign in
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed in 
                const user = userCredential.user;

                // ...
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+ "-" +errorMessage)
              });
                    }
              }

  return (
    <div>
    <Header/>
    <div className='absolute'>
    <img src='https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web/IN-en-20250303-TRIFECTA-perspective_d5f81427-d6cf-412d-8e86-2315671b9be1_small.jpg' alt='bg-image'/>
    </div>
    <form onClick={(e)=>e.preventDefault()} className='p-12 bg-black/90 absolute w-3/12 mx-auto my-36 right-0 left-0  text-white'>
       <h1 className='font-bold text-3xl py-4 text-white'>{signIn?"Sign In":"Sign Up"}</h1>
      { !signIn &&  <input ref={name} type='text' placeholder="Name" className='p-4 my-4 bg-gray-600 rounded-lg w-full  text-white'/>
      }
        <input ref={email} type='text' placeholder="Email Address" className='p-4 my-4 bg-gray-600 rounded-lg w-full  text-white'/>
        <input ref={password} type='password' placeholder="Password" className='p-4 my-4 bg-gray-600 rounded-lg w-full  text-white'/>
        <h3 className='text-red-400 font-bold'>{errorMessage}</h3>
        <button onClick={handleButtonClick} className='p-4 my-6 bg-red-600 w-full rounded-lg'>{signIn?"Sign In":"Sign Up"}</button>
        <p onClick={changeForm} className='font-bold cursor-pointer'>{signIn?"New to Netflix? Sign Up Now":"Already a user? Sign In Now"}</p>
    </form>
    </div>
  )
}

export default Login
