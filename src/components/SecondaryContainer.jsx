import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
const SecondaryContainer = () => {

  const movies = useSelector(store=>store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className='bg-black'>
    <div className='-mt-80 relative z-20'>
     <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
     <MovieList title={"Popular"} movies={movies.popularMovie}/>
     <MovieList title={"Animated"} movies={movies.nowPlayingMovies}/>
     <MovieList title={"Action"} movies={movies.nowPlayingMovies}/>
    </div>
    </div>
    )
  )
}

export default SecondaryContainer