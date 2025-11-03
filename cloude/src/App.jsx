import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import Alluser from './compnents/Alluser'
import Login from './compnents/Login'
import Plus from './compnents/Plus'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to my Cloud</h1>
      <Routes>
        <Route path='/' element={<Alluser />} />

        <Route path='/login' element={<Login />} />
        <Route path='/plus' element={<Plus />} />
      </Routes>


    </>
  )
}

export default App
