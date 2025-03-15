import React from 'react'

const VideoTitle = ({title,overview,vote_average}) => {
 
  return (
    <div className='w-screen aspect-video pt-[13%] px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div>
        <button className='bg-white text-black p-4 px-12 text-xl rounded-lg hover:opacity-80'>▶ Play</button>
        <button className='mx-2 bg-gray-500 text-bold text-white p-4 px-12 text-xl rounded-lg bg-opacity-50 opacity-60'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle