import React from 'react'
import { Netflix_BgImage } from '../utils/constants'

const GPTSearch = () => {
  return (
    <div>
        
        
            <form className='absolute w-screen top-[35%] left-[20%] '>
                <input placeholder='What you wanna watch tonight ' className='w-1/2 h-11 px-4 py-2 rounded-l-xl '></input>
                <button className="bg-red-700 h-11 px-4 py-2 text-white rounded-r-xl">Search</button>
            </form>
            <img src={Netflix_BgImage} alt='background'/>
        
    </div>
  )
}

export default GPTSearch