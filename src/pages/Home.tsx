import React from 'react'
import Navbar from '../Components/Navbar'
import Card from '../Components/Card/Card'
import { useAppSelector } from '../redux/hooks/useAppSelector'
import { useDispatch } from 'react-redux'

import { getVideos, addVideos } from '../redux/reducers/videoReducer'
import { IVideo } from '../interface/IVideo'

const Home = () => {
  
  const dispatch = useDispatch();

  React.useEffect(() =>{
    dispatch(getVideos());
  }, []);

  const videos = useAppSelector(state => state.videos.videos);

  console.log(videos);
  return (
    <div>
        <Navbar />
        <div className=' w-full lg:flex  justify-between h-96 lg:flex-row flex-col items-center '>
          {
            videos && videos.map((i: IVideo) => 
            <Card key={i.id} title={i.title} link={i.url} />
            )
          }
        </div>
    </div>
  )
}

export default Home