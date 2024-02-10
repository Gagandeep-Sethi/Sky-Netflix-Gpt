import React from 'react'
import { image_URL } from '../utils/constants'
import { Link } from 'react-router-dom'

const MovieCard = ({movie}) => {
  return (
    <div className='w-48 pr-6 z-20  '>
       <Link to={"/watch/"+movie.id}> <img className=' rounded-lg z-20 ' src={image_URL+movie?.poster_path} alt=""/></Link>
    </div>
  )
}

export default MovieCard