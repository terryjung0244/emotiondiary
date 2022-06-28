import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import New from './pages/New';
import RouteLinkTest from './components/RouteLinkTest';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <h2>App</h2>
        <Routes>
          <Route path='/' element={<Home/>}/> 
          <Route path='/new' element={<New/>}/> 
          <Route path='/edit' element={<Edit/>}/>
          <Route path='/diary:id' element={<Diary/>}/>
        </Routes>
        <RouteLinkTest/>
      </div>
    </BrowserRouter>
  )
}

export default App
