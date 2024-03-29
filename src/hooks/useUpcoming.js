import  { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {  addUpcomingMovies } from '../utils/moviesSlice'
import { options } from '../utils/constants'

const useUpcomingMovies = () => {
    const dispatch=useDispatch()
    const getNowPlayingMovies=async()=>{

        try{

        const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
        const json=await data.json()
        dispatch(addUpcomingMovies(json.results))
        }catch (error) {
          console.error('Error fetching now playing movies:', error);
      }
    
    
      }
      useEffect(()=>{
        getNowPlayingMovies()
    
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[])
}

export default useUpcomingMovies