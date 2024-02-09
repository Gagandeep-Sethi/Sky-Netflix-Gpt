import React from 'react'

const FeaturingMovieInfo = ({movie}) => {
    
    
  return (
    <div className='w-screen aspect-video bg-gradient-to-tr from-black  text-white absolute '>
       <div className=' pt-[20%] pl-[8%]'>
        <p className='font-bold text-4xl'>{movie?.original_title}</p>
        <p className='w-1/4 pt-4 '>{movie?.overview}</p>
        <div>
            <button className='py-4 px-6 rounded-lg mr-4 bg-gray-400 mt-4 hover:bg-opacity-70'>▶️Play</button>
            <button className='py-4 px-6 rounded-lg mr-4 bg-gray-400 mt-4 hover:bg-opacity-70'>More Info</button>
        </div>
        </div>
    </div>
  )
}

export default FeaturingMovieInfo