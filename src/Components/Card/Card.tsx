import React from 'react'

interface props {
    link: string
    title: string
}

const Card = (props: props) => {
  return (
   
       
    <div className='w-10/12 m-4 lg:w-4/12 bg-blue-500 text-white font-bold h-96 rounded shadow-lg mr-auto ml-auto'>
         <h1 className='p-2 text-center'>{props.title}</h1>
       <iframe className='w-full relative h-full h-96'  src={props.link} title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}

export default Card