import React from 'react'
import Header from './Header'
import useNowPlayingHook from '../hooks/useNowPlayingHook'
import MainContainer from '../components/MainContainer'
const Browse = () => {

  useNowPlayingHook();
  //Fetch data from TMDB api and updatestore
  
  return (
    <div>
      <Header/>
      <MainContainer/>
    </div>
  )
}

export default Browse
