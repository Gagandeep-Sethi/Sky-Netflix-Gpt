import React, {  useRef } from 'react'
import { Netflix_BgImage, options } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addResults } from '../utils/gptSearchSlice'
import MoviesList from './MoviesList'

const GPTSearch = () => {
  const search=useRef("")
  const dispatch =useDispatch()
  const results=useSelector(appStore=>appStore.gpt.searchResults)
  console.log(results)


  const searchResults=async()=>{
    
    try{
    const data=await fetch('https://api.themoviedb.org/3/search/movie?query='+search.current.value+'&include_adult=false&language=en-US&page=1', options)
    const json=await data.json()
    console.log(json.results)
    dispatch(addResults(json.results))
  }catch(e){
    console.log(e.message)
  }
  }
  const handleSearch=()=>{
  searchResults()
    
  }


  return (
    <div>
        
        <img className="fixed"src={Netflix_BgImage} alt='background'/>
            <form onSubmit={(e)=>e.preventDefault()}className='absolute w-screen top-[35%] left-[20%] '>
            <input ref={search} placeholder='What you wanna watch tonight' className='w-1/2 h-11 px-4 py-2 rounded-l-xl border-2 border-red-700' />

                <button onClick={handleSearch} className="bg-red-700 h-11 px-4 py-2 text-white rounded-r-xl border-2 border-white">Search</button>
            </form>
            {results?<div className='pt-[21%]'><MoviesList movie={results} name={search.current.value}/></div>:null}
            
            
            
            
        
    </div>
  )
}

export default GPTSearch