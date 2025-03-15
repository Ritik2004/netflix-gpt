import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_options } from "../utils/constants";
import { addTrailerVideo } from '../utils/movieSlice';

const videoPlayingHook = (movieId) => {
    const dispatch = useDispatch();

    //fetch trailer video and update the store with trailer video data
    const getMovieVideo = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_options);
        const json = await data.json();
       
        const filterData = json.results.filter((video)=>video.type === "Trailer")
        const trailer = filterData.length?filterData[0]:json.results[0];
        dispatch(addTrailerVideo(trailer))
     
    } 
    useEffect(()=>{
     getMovieVideo();
    },[])
}

export default videoPlayingHook;