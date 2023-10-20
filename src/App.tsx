import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/Header/Header';
import Main from './pages/Main/Main';
import { PlayMain, PlayRouter } from './pages/plays';
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
import CommunityDetail from './pages/Community/CommunityDetail';
import CommunityForm from './pages/Community/CommunityForm';
import CommunityList from './pages/Community/CommunityList';
import ReviewSearch from './pages/Review/ReviewSearch';
import MyPage from './pages/MyPage/MyPage';
import MyPageReview from './pages/MyPage/MyPageReview';
import MyPageChat from './pages/MyPage/MyPageChat';
import MyPageChangeInfo from './pages/MyPage/MyPageChangeInfo';
import MyPageRequest from './pages/MyPage/MyPageRequest';
import MyPageCoupon from './pages/MyPage/MyPageCoupon';
import FindUserIdPw from './component/FindUser/FindUserIdPw';
import FindIdSuccess from './component/FindUser/FindIdSuccess';
import { useRecoilValue } from 'recoil';
import { isPathTrueAtom } from './recoil/FindUserIdPw/FindUserIdPwAtom';
import FindPwSection2 from './component/FindUser/FindPwSection2';
import FindPw3Auth from './component/FindUser/FindPw3Auth';
import FindPw4 from './component/FindUser/FindPw4';
import Room from './component/Chat/Room';
import ReviewForm from './pages/Review/ReviewForm';
import TestLobby from './component/Chat/TestLobby';


function App() {

  const isPathTure = useRecoilValue<boolean>(isPathTrueAtom);

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/play' element={<PlayMain />} />
        <Route path='/play/:pID' element={<PlayRouter />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/findidpw' element={<FindUserIdPw />} />

        {isPathTure ? null : (
          <>
            <Route path='/findidsuccess' element={<FindIdSuccess />} />
            <Route path='/findpw2' element={<FindPwSection2 />} />
            <Route path='/findpwauth' element={<FindPw3Auth/>}/>
            <Route path='/findpw4'element={<FindPw4/>}/>
          </>
        )}

        <Route path='/Review' element={<Review />} />
        <Route path='/ReviewForm' element={<ReviewForm />} />
        <Route path='/ReviewSearch' element={<ReviewSearch />} />

        <Route path='/Purpose' element={<Purpose />} />
        <Route path='/Location' element={<LocationPages/>} />
        <Route path='/Request' element={<RequestPages />} />
        <Route path='/RequestList' element={<RequestListPages />} />
        <Route path='/OnAir' element={<OnAir />} />
        <Route path='/GuseulDetail' element={<GuseulDetail />} />

        <Route path='/Community' element={<Community />} />
        <Route path='/CommunityDetail' element={<CommunityDetail />} />
        <Route path='/CommunityForm' element={<CommunityForm />} />
        <Route path='/CommunityList' element={<CommunityList />} />

        <Route path='/MyPage' element={<MyPage />} />
        <Route path='/MyPageReview' element={<MyPageReview />} />
        <Route path='/MyPageChat' element={<MyPageChat />} />
        <Route path='/MyPageChangeInfo' element={<MyPageChangeInfo />} />
        <Route path='/MyPageRequest' element={<MyPageRequest />} />
        <Route path='/MyPageCoupon' element={<MyPageCoupon />} />

        <Route path='/room/:roomId' element={<Room/>}/>
        
        <Route path='/test' element={<TestLobby/>}/>
        <Route path="/*" element={
          <h1 style={{ width: "100%", textAlign: "center", marginTop: "10%", position: "absolute" }}>페이지가 없습니다</h1>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
