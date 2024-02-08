import React from 'react'
import {  useSelector } from 'react-redux'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import FeaturingMovie from './FeaturingMovie'
import FeaturingMovieInfo from './FeaturingMovieInfo'


const Browser = () => {
  //const dispatch=useDispatch()
  const movieslicer=useSelector((appStore)=>appStore.movie.nowPlaying)
  

  
  useNowPlayingMovies()
  
  if(!movieslicer)return null
  console.log(movieslicer[0])

  return (
    <div>
      
      <FeaturingMovieInfo movie={movieslicer[0]}/>
      <FeaturingMovie />
      
      </div>
  )
}

export default Browser

//<featuring movie/>
//   -trailer playing in background
//   -geaturin movie details
//<movie list>
//   -now playing
//   -popular movies
//   -