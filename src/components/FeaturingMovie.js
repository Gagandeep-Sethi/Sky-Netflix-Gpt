
import React from 'react'
import { useSelector } from 'react-redux'
import useTrailerOfFeaturingMovie from '../hooks/useTrailerOfFeaturinfMovie'
import FeaturingMovieInfo from './FeaturingMovieInfo'

const FeaturingMovie = () => {
    
    const movieslicer=useSelector((appStore)=>appStore.movie.nowPlaying)
    const video=useSelector((appStore)=>appStore?.movie?.featuringMovie)
    
    
    
    
    useTrailerOfFeaturingMovie(movieslicer[0]?.id)
    if(!video){
      
      return <h1 className='text-3xl font-bold'>If the content is not loaded please use Vpn</h1>}
    
   


  return (
    <div className=''>
        <FeaturingMovieInfo movie={movieslicer[0]}/>
        <iframe className='w-screen aspect-video ' src={"https://www.youtube.com/embed/"+video.key +"?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&showinfo=0&autohide=1&rel=0&playlist="+video.key}
        title="YouTube video player" 
        
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" 
        ></iframe>
    </div>
  )
}

export default FeaturingMovie