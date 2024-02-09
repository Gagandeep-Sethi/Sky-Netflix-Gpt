import React from 'react'
import { useSelector } from 'react-redux'
import MoviesList from './MoviesList'

const SecondaryContainer = () => {

    const movies=useSelector((appStore)=>appStore?.movie)

    if(movies===null)return null
    




  return (
    <div className='bg-black'>
        <MoviesList className="ml-96"  movie={movies?.nowPlaying} name="Now Playing"/>
        <MoviesList movie={movies?.popular} name="Popular"/>
        <MoviesList movie={movies?.topRated} name="Top Rated"/>
        <MoviesList movie={movies?.upcoming} name="Upcoming"/>
    </div>
  )
}

export default SecondaryContainer