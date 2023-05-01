import React from 'react'
import Input from './Input'
import Account from './Account/Account'

const Navbar = () => {
  return (
    <nav className='bg-blue-500 justify-center flex flex-col lg:flex-row items-center lg:justify-between text-center lg:text-left  w-full text-white font-bold text-2xl p-4'>
        <div className='lg:w-3/12 justify-center flex'>
            VIDEO
        </div>
        <div className='mt-4 lg:mt-0 lg:w-6/12 w-10/12'>
        <Input 
            name='search' 
            type='text' 
            place='pesquisa...' 
            change={() => console.log("oi")} />
        </div>
        <div className='mt-4 lg:mt-0 lg:w-3/12 '>
            <Account />          
        </div>
    </nav>
  )
}

export default Navbar