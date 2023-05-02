import React from 'react'

interface props {
    link: string
    title: string
}

const Card = (props: props) => {
  return (
   
       
    <div className='w-10/12  mt-16 p-4  text-white lg:w-4/12 font-bold h-96   mr-auto ml-auto'>
         
         <div className=' bg-blue-500 h-full w-full shadow-lg rounded'>
         <h1 className='p-2 text-center'>{props.title}</h1>
       <iframe className='w-full relative h-full h-96'  src={props.link} title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
         </div>
    </div>
  )
}

export default Card