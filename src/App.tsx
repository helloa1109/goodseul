import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/Header/Header';
import Main from './pages/Main/Main';
import SubHeader from './component/Header/SubHeader';
import {PlayMain,PlayRouter} from './pages/plays';
import Login from './component/Login/Login';
import SignUp from './component/SignUp/SignUp';
import Purpose from './pages/Purpose/Purpose';
import Review from "./pages/Review/Review";
import LocationPages from './pages/LocationBased/LocationPages';
import RequestPages from './pages/Request/RequestPages';
import RequestListPages from './pages/RequestList/RequestPages';
import OnAir from './pages/OnAir/OnAir';
import GuseulDetail from './pages/GuseulDetail/GuseulDetail';
import Community from './pages/Community/Community';
import CommunityDetail from './pages/Community/ComminutyDetail';
import CommunityForm from './pages/Community/CommunityForm';
import CommunityList from './pages/Community/CommunityList';
import ReviewSearch from './pages/Review/ReviewSearch';
import MyPage from './pages/MyPage/MyPage';
import MyPageReview from './pages/MyPage/MyPageReview';
import MyPageChat from './pages/MyPage/MyPageChat';
import MyPageChangeInfo from './pages/MyPage/MyPageChangeInfo';
import MyPageRequest from './pages/MyPage/MyPageRequest';
import MyPageCoupon from './pages/MyPage/MyPageCoupon';



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
        <Route path='/ReviewSearch' element={<ReviewSearch/>}/>

        <Route path='/Purpose' element={<Purpose/>}/>
        <Route path='/Location' element={<LocationPages/>}/>
        <Route path='/Request' element={<RequestPages/>}/>
        <Route path='/RequestList' element={<RequestListPages/>}/>
        <Route path='/OnAir' element={<OnAir/>}/>
        <Route path='/GuseulDetail' element={<GuseulDetail/>}/>
        
        <Route path='/Community' element={<Community/>}/>
        <Route path='/CommunityDetail' element={<CommunityDetail/>}/>
        <Route path='/CommunityForm' element={<CommunityForm/>}/>
        <Route path='/CommunityList' element={<CommunityList/>}/>

        <Route path='/MyPage' element={<MyPage/>}/>
        <Route path='/MyPageReview' element={<MyPageReview/>}/>
        <Route path='/MyPageChat' element={<MyPageChat/>}/>
        <Route path='/MyPageChangeInfo' element={<MyPageChangeInfo/>}/>
        <Route path='/MyPageRequest' element={<MyPageRequest/>}/>
        <Route path='/MyPageCoupon' element={<MyPageCoupon/>}/>


        <Route path="/*" element={
          <h1 style={{ width: "100%", textAlign: "center", marginTop: "10%", position: "absolute" }}>페이지가 없습니다</h1>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
