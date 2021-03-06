import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import New from './pages/New';
import MyButton from './components/MyButton';
import MyHeader from './components/MyHeader';



const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <MyHeader 
          headText={'App'} 
          leftChild={<MyButton text={'Left Button'} onClick={() => alert('Hello')}/>}
          rightChild={<MyButton text={'Right Button'} onClick={() => alert('Hello')}/>}
          />
        <h2>App</h2>
        <MyButton
          text='Button'
          type='positive'
          onClick={() => alert('Button Clicked')}        
        />
        <MyButton
          text='Button'
          type='negative'
          onClick={() => alert('Button Clicked')}        
        />
        <MyButton
          text='Button'
          onClick={() => alert('Button Clicked')}        
        />
        
        <Routes>
          <Route path='/' element={<Home/>}/> 
          <Route path='/new' element={<New/>}/> 
          <Route path='/edit' element={<Edit/>}/>
          <Route path='/diary:id' element={<Diary/>}/>
        </Routes>
        
      </div>
    </BrowserRouter>
  )
}

export default App
