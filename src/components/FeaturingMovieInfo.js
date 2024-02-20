import React from 'react'
import { Link } from 'react-router-dom'

const FeaturingMovieInfo = ({movie}) => {
    
    
  return (
    <div className='w-screen aspect-video bg-gradient-to-tr from-black  text-white absolute '>
       <div className=' pt-[20%] pl-[8%]'>
        <p className='font-bold text-4xl'>{movie?.original_title}</p>
        <p className='w-1/4 pt-4 '>{movie?.overview}</p>
        <div>
            <Link to={"/watch/"+movie.id} ><button  className='py-4 px-6 rounded-lg mr-4 bg-gray-400 mt-4 hover:bg-opacity-70'>▶️  Play</button></Link>
            <Link to={"/watch/"+movie.id} ><button className='py-4 px-6 rounded-lg mr-4 bg-gray-400 mt-4 hover:bg-opacity-70'>
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                 </svg>  More Info</button></Link>
        </div>
        </div>
    </div>
  )
}

export default FeaturingMovieInfo