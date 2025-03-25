import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  return (
    <div className='flex justify-center items-center'>
        <div className='h-80 w-1/3 border rounded-md mt-10'>
            <h4 className='border border-black text-3xl bg-gray-50 text-start h-12'>Login</h4>
            <div className='border border-black rounded-md p-2 w-96 mt-4 ml-4'>
                <input type="email" placeholder='Email address'/>
            </div>
            <div className='border border-black rounded-md p-2 w-96 mt-4 ml-4'>
                <input type="password" placeholder='Password' />
            </div>
        </div>
    </div>
  )
}

export default Login;
