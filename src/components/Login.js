import React, { useRef, useState } from 'react'
import { Netflix_BgImage } from '../utils/constants'
import { getValidation } from '../utils/validation'
import {  createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
//import Header from './Header';

const Login = () => {
  const[signinForm ,setSigninForm]=useState(true)
  const[errorMessage,setErrorMessage]=useState(null)
  const email=useRef(null)  //it will safe as an object 
  const password=useRef(null)
  
  const handleClick=()=>{
   const msg= getValidation(email.current.value,password.current.value)//actual value of email will be inside current.value
   setErrorMessage(msg)
   if(msg) return
   else{
    if(!signinForm){
      createUserWithEmailAndPassword(auth,email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    //const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorMessage)
    
    // ..
  });
    }
    if(signinForm){
      signInWithEmailAndPassword(auth,email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    //const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorMessage)
    console.log(error)
  });
    }
   }
    
  }
  return (
    <div className='text-white  '>
        
        <div className=' w-3/12   absolute left-[36.5%] top-40   '>
          {/* this is also we can prevent or add this in submit button  */}
            <form onSubmit={(e)=>e.preventDefault()} className='bg-black bg-opacity-75 w-full p-8    rounded-lg ' >
                <h1 className=' text-3xl font-bold'>{signinForm?"Sign In":"Sign Up"}</h1>
                {!signinForm? <input className='p-4 my-6 bg-gray-500  block  w-full  rounded-lg ' type='text'placeholder='Full Name' ></input>:null}
                <input ref={email} className=' p-4 my-6 bg-gray-500  block  w-full  rounded-lg  '
                type='email'
                placeholder='Email address' >

                </input>
                <input ref={password} className=' p-4 my-6 bg-gray-500 block w-full rounded-lg ' type='password' placeholder='Password' >
                </input>
                <p className='text-red-600'>{errorMessage}</p>
                <button onClick={handleClick} className=' p-4 my-4 block mx-auto  w-1/2  bg-red-700 rounded-lg'>Login</button>
                <p>{signinForm?"New to Netflix?":"Already a user?" }<span className='font-bold cursor-pointer' onClick={()=>setSigninForm(!signinForm)
                  
                }> {signinForm? "Sign up now":"Signin"}</span></p>
                
            </form>
        </div>
        <div className=''>
            <img src={Netflix_BgImage} alt='background'/>
        </div>

        
        
    </div>
  )
}

export default Login