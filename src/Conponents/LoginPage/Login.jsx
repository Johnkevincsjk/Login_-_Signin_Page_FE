import React from 'react'
import '../LoginPage/Login.css'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div className='container text-center bg-teal-300 lg:w-full'>
            <h1 className='font-bold text-3xl'>Log-in</h1>
            <div className='login_form_mail'>
                <form action="" className='Login_form_tag lg:w-90 flex flex-col justify-center items-center'>
                    <input className='m-7 h-10 w-80 p-2 rounded focus:outline-none focus:ring focus:ring-blue-500' type="email" placeholder='Email' />
                    <input className='mb-5 h-10 w-80 p-2 rounded focus:outline-none focus:ring focus:ring-blue-500' type="password" placeholder='Password' />
                    <button class="hover:bg-orange-500 bg-yellow-300 p-3 rounded w-40">
                        Log-in
                    </button>
                </form>
                <div className='login_page_footer grid grid-flow-row grid-rows-2 gap-2'>
                    <div className='flex justify-center items-center gap-4'>
                        <p className='font-semibold text-sm'>Don't have an account?</p>
                        <Link className='text-blue-600 hover:underline hover:text-blue-900' to={'/Signin'}>Create an account</Link>
                    </div>

                    <p className='text-blue-600 hover:text-blue-900  hover:underline'>Forgotten password?</p>
                </div>
            </div>
        </div>
    )
}
