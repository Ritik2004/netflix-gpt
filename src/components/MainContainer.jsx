import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import SecondaryContainer from './SecondaryContainer'
const MainContainer = () => {
  const movies = useSelector((store)=>store.movies?.nowPlayingMovies);
  if(!movies) return ;

  const mainMovie = movies[0];
  const {original_title,overview,vote_average,id} = mainMovie;
 
    return (<div>
        <VideoTitle title={original_title} overview={overview} vote_average={vote_average} />
        <VideoBackground movieId = {id}/>
        <SecondaryContainer/>
    </div>
  )
}

export default MainContainer