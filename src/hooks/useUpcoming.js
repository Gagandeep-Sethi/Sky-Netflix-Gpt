import  { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {  addUpcomingMovies } from '../utils/moviesSlice'
import { options } from '../utils/constants'

const useUpcomingMovies = () => {
    const dispatch=useDispatch()
    const getNowPlayingMovies=async()=>{

    

        const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
        const json=await data.json()
        console.log(json.results)
        dispatch(addUpcomingMovies(json.results))
    
    
      }
      useEffect(()=>{
        getNowPlayingMovies()
    
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[])
}

export default useUpcomingMovies