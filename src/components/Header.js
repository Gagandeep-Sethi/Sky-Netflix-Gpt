import React from 'react'
import { Netflix_Logo } from '../utils/constants'

const Header = () => {
  return (
    <div className=' absolute bg-gradient-to-b from-black  '>
    <img src={Netflix_Logo} alt='logo' className='block    w-[14%] ml-36 '/>
    </div>
  )
}

export default Header