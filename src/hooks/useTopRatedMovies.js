import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTopRatedMovies } from '../utils/moviesSlice'
import { options } from '../utils/constants'

const useTopRatedMovies = () => {
  const nowplayingMovies=useSelector((appStore)=>appStore?.movie?.topRated)
    const dispatch=useDispatch()
    const getNowPlayingMovies=async()=>{

    
        try{
        const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
        const json=await data.json()
        dispatch(addTopRatedMovies(json.results))
        }catch (error) {
          console.error('Error fetching now playing movies:', error);
      }
    
    
      }
      useEffect(()=>{
        !nowplayingMovies && getNowPlayingMovies()
    
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[])
}

export default useTopRatedMovies