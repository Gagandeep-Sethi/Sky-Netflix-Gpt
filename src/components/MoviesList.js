import React from 'react'
import MovieCard from './MovieCard'

const MoviesList = ({movie,name}) => {
  if(movie===null)return null
  return (
    <div className=''>
      <h1 className='relative pl-2 pt-6 pb-2 text-3xl text-white z-20'>{name}</h1>
      <div className='flex overflow-x-scroll pl-4 '>
        
        <div className='flex  '>
        {movie.map((res)=>{return(<MovieCard key={res?.id} movie={res}/>)})}
        </div>
        </div>
      
      
    </div>
  )
}

export default MoviesList