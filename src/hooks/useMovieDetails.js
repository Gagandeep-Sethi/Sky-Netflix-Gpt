import  { useEffect } from 'react'
import { addMovieDetails } from '../utils/moviesSlice'
import { useDispatch } from 'react-redux'
import { options } from '../utils/constants'

const useMovieDetails = (movieId) => {
     
    const dispatch=useDispatch()
    const getMovieDetails=async()=>{
        try{
        const data=await fetch('https://api.themoviedb.org/3/movie/'+movieId+'?language=en-US', options)
        const json=await data.json()
        dispatch(addMovieDetails(json))
        }catch (error) {
          console.error('Error fetching now playing movies:', error);
      }
      }
      useEffect(()=>{
        getMovieDetails()
    
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[])
    
}

export default useMovieDetails