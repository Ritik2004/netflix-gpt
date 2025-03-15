import { API_options } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovie } from '../utils/movieSlice'
import { useEffect } from 'react'

const useNowPlayingHook = () => {
    //Fetch data from TMDB api and updatestore
  const dispatch = useDispatch();
  const getNowplayingmovie = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',  API_options)
    const json = await data.json();
    dispatch(addNowPlayingMovie(json.results))
    console.log("data",json)
  }

  useEffect(()=>{
    getNowplayingmovie();
  },[])

}

export default useNowPlayingHook;