import React from 'react'
import './Video.css'
import PlayVid from '../../Components/PlayVid/PlayVid'
import Recommended from '../../Components/Recommended/Recommended'
import { useParams } from 'react-router-dom'
const Video = () => {
  const{videoId,categoryId}=useParams();
  return (
    <div className='play-container'>
      <PlayVid videoId={videoId}/>
      <Recommended categoryId={categoryId}/>
    </div>
  )
}

export default Video
