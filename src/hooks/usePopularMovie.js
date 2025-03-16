import { API_options } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addPopularMovie } from '../utils/movieSlice'
import { useEffect } from 'react'

const usePopularMovie = () => {
    //Fetch data from TMDB api and updatestore
  const dispatch = useDispatch();
  const getNowplayingmovie = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1',  API_options)
    const json = await data.json();
    dispatch(addPopularMovie(json.results))
    console.log("data",json)
  }

  useEffect(()=>{
    getNowplayingmovie();
  },[])

}

export default usePopularMovie;