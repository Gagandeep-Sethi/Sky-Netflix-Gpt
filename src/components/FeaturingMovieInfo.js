import React from 'react'

const FeaturingMovieInfo = ({movie}) => {
    
    
  return (
    <div className='absolute top-[30%] left-[8%] text-white  '>
        <p className='font-bold text-3xl'>{movie?.original_title}</p>
        <p className='w-1/4 pt-4 '>{movie?.overview}</p>
        <div>
            <button className='py-4 px-6 rounded-lg mr-4 bg-gray-400 mt-4'>▶️Play</button>
            <button className='py-4 px-6 rounded-lg mr-4 bg-gray-400 mt-4'>More Info</button>
        </div>
    </div>
  )
}

export default FeaturingMovieInfo