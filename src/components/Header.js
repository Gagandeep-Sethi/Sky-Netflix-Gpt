import React, { useEffect } from 'react'
import { Netflix_Logo, User_logo } from '../utils/constants'
import {   onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
 
 import { Link, useNavigate } from 'react-router-dom';
import {  useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser,  } from '../utils/userSlice';

const Header = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const signedin=useSelector((appStore)=>appStore.user)
  useEffect(()=>{
    
const unsubscribe=onAuthStateChanged(auth, (user) => {
  if (user) {
    
    const{ uid ,displayName ,email }= user;
    dispatch(addUser({
      name:displayName,
      email:email,
      uid:uid
    }))
    navigate("/browser")
  } else {
    dispatch(removeUser())
    navigate("/")
  }
});
return ()=>unsubscribe()
    
// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);
  
  const handleClick=()=>{
    
signOut(auth).then(() => {
  
}).catch((error) => {
  
});
  }
  return (
    <div className=' absolute bg-gradient-to-b from-black flex justify-between  z-20  '>
    <img src={Netflix_Logo} alt='logo' className='block    w-[14%] ml-36  '/>
    
    {signedin===null?null: <div className=' mr-10 flex '>
    <Link className='self-center' to="/browser"><p className='text-white px-4 py-2  rounded-3xl  font-bold mr-6 transition ease-out duration-400 hover:bg-white hover:text-black'>Home </p></Link>
      <div>
      <img className='w-14   mt-6 ml-6 block  ' src={User_logo} alt="user"/>
      <button onClick={handleClick} className='text-red-600 inline'>Signout({signedin.name})</button>
      </div>
    </div>}
    </div>
    
  )
}

export default Header
