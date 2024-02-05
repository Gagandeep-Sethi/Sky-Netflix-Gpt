import React, { useRef, useState } from 'react'
import { Netflix_BgImage, Netflix_Logo } from '../utils/constants'
import { getValidation } from '../utils/validation'

const Login = () => {
  const[signin ,setSignin]=useState(true)
  const[validation,setValidation]=useState(null)
  const email=useRef(null)
  const password=useRef(null)
  const handleClick=()=>{
   const gg= getValidation(email.current.value,password.current.value)
   setValidation(gg)
   console.log(gg)
    
  }
  return (
    <div className='text-white  '>
        <img src={Netflix_Logo} alt='logo' className='w-2/12 absolute left-10 bg-gradient-to-r from-black '/>
        <div className=' w-3/12   absolute left-[36.5%] top-40   '>
            <form onSubmit={(e)=>e.preventDefault()} className='bg-black bg-opacity-75 w-full p-8    rounded-lg ' >
                <h1 className=' text-3xl font-bold'>{signin?"Sign In":"Sign Up"}</h1>
                {!signin? <input className='p-4 my-6 bg-gray-500  block  w-full  rounded-lg ' type='text'placeholder='Full Name' ></input>:null}
                <input ref={email} className=' p-4 my-6 bg-gray-500  block  w-full  rounded-lg  '
                type='email'
                placeholder='Email address' >

                </input>
                <input ref={password} className=' p-4 my-6 bg-gray-500 block w-full rounded-lg ' type='password' placeholder='Password' >
                </input>
                <p className='text-red-600'>{validation}</p>
                <button onClick={handleClick} className=' p-4 my-4 block mx-auto  w-1/2  bg-red-700 rounded-lg'>Login</button>
                <p>{signin?"New to Netflix?":"Already a user?" }<span className='font-bold cursor-pointer' onClick={()=>setSignin(!signin)
                  
                }> {signin? "Sign up now":"Signin"}</span></p>
                
            </form>
        </div>
        <div className=''>
            <img src={Netflix_BgImage} alt='background'/>
        </div>

        
        
    </div>
  )
}

export default Login