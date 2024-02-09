import  { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addTopRatedMovies } from '../utils/moviesSlice'
import { options } from '../utils/constants'

const useTopRatedMovies = () => {
    const dispatch=useDispatch()
    const getNowPlayingMovies=async()=>{

    

        const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
        const json=await data.json()
        dispatch(addTopRatedMovies(json.results))
    
    
      }
      useEffect(()=>{
        getNowPlayingMovies()
    
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[])
}

export default useTopRatedMovies