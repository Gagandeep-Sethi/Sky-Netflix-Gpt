import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useMovieDetails from '../hooks/useMovieDetails'
import { useSelector } from 'react-redux'
import { options } from '../utils/constants'

const WatchMovie = () => {
  const { movieId } = useParams()
  const details = useSelector((appStore) => appStore?.movie?.moviesDetail)
  const [videoKey, setVideoKey] = useState(null)

  useMovieDetails(movieId)
  useEffect(() => {
    getVideo()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const getVideo = async () => {
    try{
    const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US', options)
    const json = await data.json()
    if(json.results.length){
    const Trailer = json?.results.filter((r) => { return (r.type === "Trailer") })
    const Teaser = json?.results.filter((r) => { return (r.type === "Teaser") })
    const Clip = json?.results.filter((r) => { return (r.type === "Clip") })
    const Featurette = json?.results.filter((r) => { return (r.type === "Featurette") })
    const video = Trailer.length
      ? Trailer[0]
      : Teaser.length
        ? Teaser[0]
        : Clip.length
          ? Clip[0]
          : Featurette.length
            ? Featurette[0]
            : null;
            
    setVideoKey(video.key)
    }
    


  }catch(e){
    console.log(e.message)
  }}

  if (!details){
    
    return <h1 className='text-3xl font-bold text-green-950 pt-80'>If the content is not loaded please use Vpn</h1>} 
  const { original_title, tagline, overview, genres, vote_average, status } = details



  return (
    <div className='bg-black'>
      <div className='pt-[10%]'>
        <div className='px-6 w-screen'>
          <iframe className=' aspect-video w-full    rounded-3xl ' src={"https://www.youtube.com/embed/" + videoKey + "?&showinfo=0&modestbranding=1&rel=0"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; " allowFullScreen></iframe>
        </div>
        <div className='bg-gray-300 rounded-lg  mx-6 mt-4 px-4 py-2'>
          <p className='font-bold text-3xl  mb-4'>{original_title} <span className={'text-lg font-semibold ' + (vote_average > 5 && "text-green-600")} > ({vote_average}/10 ⭐️)</span></p>
          <p className='font-bold text-xl'>About -<span className='font-normal text-lg'>{tagline}</span></p>
          <p className='font-bold text-xl'>Genre-<span className='font-normal text-lg'>({genres.map((r) => r?.name).join(",")})</span></p>
          <p className='font-bold text-xl'>Status-<span className='font-normal text-lg'>{status}</span></p>
          <p className='font-bold text-xl'>Description-<span className='font-normal text-lg'>{overview}</span></p>


        </div>
      </div>
    </div>
  )
}

export default WatchMovie