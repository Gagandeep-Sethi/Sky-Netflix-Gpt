import React from 'react'
import {  useSelector } from 'react-redux'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpcomingMovies from '../useUpcomingMovies'


const Browser = () => {
  const movieslicer=useSelector((appStore)=>appStore.movie.nowPlaying)
  

  
  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  useUpcomingMovies()
  
  if(!movieslicer)return null

  return (
    <div>
      <MainContainer/>
      <SecondaryContainer/>
      
      
      
      
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