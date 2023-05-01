import React from 'react'


interface props{
    type: string
    name: string
    place: string
    change: () => void

}

const Input = (props: props) => {
  return (
    <div>
        <input 

            className='p-2 rounded text-black font-medium w-full'
            type={props.type} 
            name={props.name} 
            placeholder={props.place} 
            onChange={() => props.change}/>
    </div>
  )
}

export default Input