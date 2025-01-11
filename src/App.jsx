import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './Conponents/LoginPage/Login'
import Signin from './Conponents/SigninPage/Signin'


function App() {

  return (
    <>
      <div className='mx-auto'>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Signin' element={<Signin />} />

        </Routes>
      </div>
    </>
  )
}

export default App
