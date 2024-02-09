import React from 'react'
import { image_URL } from '../utils/constants'

const MovieCard = ({movie}) => {
  return (
    <div className='w-48 pr-6 '>
        <img className=' rounded-sm ' src={image_URL+movie?.poster_path} alt=""/>
    </div>
  )
}

export default MovieCard