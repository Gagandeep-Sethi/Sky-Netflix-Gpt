
import  { useEffect } from 'react'
import { addMovies } from '../utils/moviesSlice'
import { useDispatch } from 'react-redux'
import { options } from '../utils/constants'

const useNowPlayingMovies = () => {
    const dispatch=useDispatch()
    const getNowPlayingMovies=async()=>{

    

        const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
        const json=await data.json()
        console.log(json.results)
        dispatch(addMovies(json.results))
    
    
      }
      useEffect(()=>{
        getNowPlayingMovies()
    
      },[])
    
}

export default useNowPlayingMovies