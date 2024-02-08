
import  { useEffect } from 'react'
import { options } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addFeaturingMovie } from '../utils/moviesSlice'

const useTrailerOfFeaturingMovie = (movieId) => {
    const dispatch=useDispatch()
    
    const getTrailer=async()=>{
       
        const data =await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', options)
        const json=await data.json()
        console.log(json)
        const trailer=json?.results?.filter((r)=>r.type==="Trailer")
        console.log(trailer)
        //const teaser=json?.results?.filter((r)=>r.type==="Teaser")

        dispatch(addFeaturingMovie(trailer[0]))
        console.log(json)
    }
    useEffect(()=>{
        
        getTrailer()
        

    },[])
  
}

export default useTrailerOfFeaturingMovie