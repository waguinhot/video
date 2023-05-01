import React from 'react'
import Usericon from './Usericon'

const Account = () => {
   const [account, setAccount] = React.useState(false);
  return (
    <div className='justify-center flex ease-out duration-300'>
        <div onClick={() => setAccount(!account)}><Usericon /></div>

        {
            account && 
            <div className='font-normal z-50 bg-white rounded-lg text-blue-500 p-4 absolute mt-12 shadow'>
                <li> ola fulano</li>
                <li> editar conta</li>
                <li> Sair</li>  
            </div>
        }
        
    </div>
  )
}

export default Account