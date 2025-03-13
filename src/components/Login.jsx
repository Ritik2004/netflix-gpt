import React, { useState } from 'react'
import Header from './Header'
const Login = () => {
  const[signIn,setsignIn] = useState();
  
  const changeForm = () => {
    setsignIn(!signIn);
  }
  
  return (
    <div>
    <Header/>
    <div className='absolute'>
    <img src='https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web/IN-en-20250303-TRIFECTA-perspective_d5f81427-d6cf-412d-8e86-2315671b9be1_small.jpg' alt='bg-image'/>
    </div>
    <form className='p-12 bg-black/90 absolute w-3/12 mx-auto my-36 right-0 left-0  text-white'>
       <h1 className='font-bold text-3xl py-4 text-white'>{signIn?"Sign In":"Sign Up"}</h1>
      { !signIn &&  <input type='text' placeholder="Name" className='p-4 my-4 bg-gray-600 rounded-lg w-full  text-white'/>
      }
        <input type='text' placeholder="Email Address" className='p-4 my-4 bg-gray-600 rounded-lg w-full  text-white'/>
        <input type='password' placeholder="Password" className='p-4 my-4 bg-gray-600 rounded-lg w-full  text-white'/>
        <button className='p-4 my-6 bg-red-600 w-full rounded-lg'>{signIn?"Sign In":"Sign Up"}</button>
        <p onClick={changeForm} className='font-bold cursor-pointer'>{signIn?"New to Netflix? Sign Up Now":"Already a user? Sign In Now"}</p>
    </form>
    </div>
  )
}

export default Login
