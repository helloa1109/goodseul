import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/Header/Header';
import Main from './component/Main/Main';
import SubHeader from './component/Header/SubHeader';
import {PlayMain,PlayRouter} from './pages/plays';
import Login from './component/Login/Login';
import SignUp from './component/SignUp/SignUp';
import Purpose from './component/Purpose/Purpose';
import Review from "./component/Review/Review";
import LocationBased from './component/LocationBased/LocationBased';


function App() {
 
  return (
    <BrowserRouter>
      {window.location.pathname === '/' ? <Header /> : <SubHeader />}
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/play' element={<PlayMain />} />
        <Route path='/play/:pID' element={<PlayRouter />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/Review' element={<Review/>}/>
        <Route path='/Purpose' element={<Purpose/>}/>
        <Route path='/Location' element={<LocationBased/>}/>

        <Route path="/*" element={
          <h1 style={{ width: "100%", textAlign: "center", marginTop: "10%", position: "absolute" }}>페이지가 없습니다</h1>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
