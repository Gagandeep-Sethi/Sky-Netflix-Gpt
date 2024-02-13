
import  { useEffect } from 'react'
import { addMovies } from '../utils/moviesSlice'
import { useDispatch } from 'react-redux'
import { options } from '../utils/constants'

const useNowPlayingMovies = () => {
    const dispatch=useDispatch()
    const getNowPlayingMovies=async()=>{

      try {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
        const json = await data.json();
        dispatch(addMovies(json.results));
    } catch (error) {
        console.error('Error fetching now playing movies:', error);
    }
};
      useEffect(()=>{
        getNowPlayingMovies()
    
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[])
    
}

export default useNowPlayingMovies