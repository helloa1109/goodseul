import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/Header/Header';
import Main from './component/Main/Main';
import SubHeader from './component/Header/SubHeader';
import Test1 from './component/Main/Test1';

function App() {
  
  return (
    <BrowserRouter>
    {window.location.pathname === '/' ? <Header /> : <SubHeader/>}
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/test' element={<Test1/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
