import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Diary from './pages/Diary'
import Edit from './pages/Edit'
import New from './pages/New'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <h2>App</h2>
        <Routes>
          <Route path='/' element={<Home/>}/> 
          <Route path='/new' element={<New/>}/> 
          <Route path='/edit' element={<Edit/>}/>
          <Route path='/diary' element={<Diary/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
