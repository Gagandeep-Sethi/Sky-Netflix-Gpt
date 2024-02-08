
import React from 'react'
import { useSelector } from 'react-redux'
import useTrailerOfFeaturingMovie from '../hooks/useTrailerOfFeaturinfMovie'

const FeaturingMovie = () => {
    
    const movieslicer=useSelector((appStore)=>appStore.movie.nowPlaying)
    const video=useSelector((appStore)=>appStore?.movie?.featuringMovie)
    
    
    
    
    
    useTrailerOfFeaturingMovie(movieslicer[0]?.id)
    if(!video)return null
    
   


  return (
    <div className=''>
        <iframe className='w-screen aspect-video' src={"https://www.youtube.com/embed/"+video.key +"?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&showinfo=0&autohide=1"}
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;loop;showinfo=0" 
        allowfullscreen></iframe>
    </div>
  )
}

export default FeaturingMovie