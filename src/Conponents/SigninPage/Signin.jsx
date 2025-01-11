import React from 'react'
import '../SigninPage/Signin.css'
import { Link } from 'react-router-dom'

export default function Signin() {
    return (
        <div className='container bg-emerald-300 text-center'>
            <h1 className='font-bold text-3xl mb-10'>Create an account</h1>
            <div className='login_form_mail flex justify-center items-center flex-col h-auto'>
                <form action="" className='Login_form_tag lg:w-90 flex flex-col justify-center items-center'>
                    <input className='mb-7 h-10 w-80 p-2 rounded focus:outline-none focus:ring focus:ring-blue-500' type="text" placeholder='Full Name' />
                    <input className='mb-7 h-10 w-80 p-2 rounded focus:outline-none focus:ring focus:ring-blue-500' type="email" placeholder='Email' />
                    <div className='gender_input_wapper mb-7 flex justify-evenly items-center'>
                        <p className='font-semibold'>Select Gender :</p>
                        <label className='' htmlFor=""><input type="radio" name="gender" id="" />Male</label>
                        <label htmlFor=""><input type="radio" name="gender" id="" />Female</label>
                    </div>
                    {/* <label className='text-current' htmlFor="age">Select your age band</label>
                    <select className='w-80 rounded mb-7 pl-2 py-2' name="age" id="age">
                        <option value="">under 16</option>
                        <option value="">16+</option>
                    </select> */}
                    <input className='mb-5 h-10 w-80 p-2 rounded focus:outline-none focus:ring focus:ring-blue-500' type="password" placeholder='Create password' />
                    <input className='mb-5 h-10 w-80 p-2 rounded focus:outline-none focus:ring focus:ring-blue-500' type="password" placeholder='Confirm password' />
                    <button class="hover:bg-orange-500 bg-yellow-300 p-3 rounded w-40">
                        Sign-in
                    </button>
                </form>
                <div className='login_page_footer flex flex-row justify-center items-center'>
                    <p className='font-bold m-2'>Already an User?</p> <Link className='text-blue-600 hover:text-blue-900  hover:underline' to={'/'}>Log-in</Link>

                </div>
            </div>
        </div>
    )
}
