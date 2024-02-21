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
  //const observer=new IntersectionObserver()
  

  
  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  useUpcomingMovies()
  
  if(!movieslicer)return <h1 className='absolute text-3xl text-black mt-[20%] ml-[25%]'>Please use Vpn if content is not loaded and refresh the Page</h1>
  
  return (
    <div className=" h-screen bg-black" >
      <MainContainer/>
      <SecondaryContainer/>
      
      
      
      
      </div>
  )
}

export default Browser

