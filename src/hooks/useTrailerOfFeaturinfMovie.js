
import  { useEffect } from 'react'
import { options } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addFeaturingMovie } from '../utils/moviesSlice'

const useTrailerOfFeaturingMovie = (movieId) => {
    const dispatch=useDispatch()
    
    const getTrailer=async()=>{
       
        const data =await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', options)
        const json=await data.json()
        const trailer=json?.results?.filter((r)=>r.type==="Trailer")

        dispatch(addFeaturingMovie(trailer[0]))
    }
    useEffect(()=>{
        
        getTrailer()
        

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  
}

export default useTrailerOfFeaturingMovie