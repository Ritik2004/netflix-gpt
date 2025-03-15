import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const user= useSelector(store => store.user) 
  const handleSignout = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/')

    }).catch((error) => {
      // An error happened.
      navigate('/error')
    });
    
  }
    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, 
            const {uid,email,displayName,photoURL} = user;
            dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
            navigate('/browse')
          } else {
            // User is signed out
            dispatch(removeUser());
             navigate("/")
          }
        });
        //this will be called when component unmonuts
        return ()=> unsubscribe();
      },[])

  return (
    <div className='absolute flex w-screen px-8 py-2 mr-2 bg-gradient-to-b from-black z-10 justify-between '>
      <img className='w-52'
      src={LOGO}
      />
     {user &&  <div className='flex align-bottom p-2'>
          <img className='w-12 h-12' src={user?.photoURL}/>
          <button onClick={handleSignout} className='font-bold text-white'>(Sign Out)</button>
      </div>
     }
    </div>
  )
}

export default Header
