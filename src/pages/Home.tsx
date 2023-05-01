import React from 'react'
import Navbar from '../Components/Navbar'
import Card from '../Components/Card/Card'

const Home = () => {
  return (
    <div>
        <Navbar />
        <div className=' w-full  lg:justify-center h-96 lg:flex-row flex-col items-center relative'>
          <Card title='RUJA O LEAO' link='https://www.youtube.com/embed/gTRFVMkMajw'/>

          <Card  title='A BENCAO' link='https://www.youtube.com/embed/8Hu6PUt40KQ'/>
        </div>
    </div>
  )
}

export default Home