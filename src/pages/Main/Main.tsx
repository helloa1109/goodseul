import React, { ChangeEvent, useState } from 'react'
import "../../style/main/main.scss"
import "../../style/global/global.scss"
import OnAir from "../../component/Slider/Main/OnAir"
import Purpose from "../../component/Slider/Main/Purpose"
import Review from "../../component/Slider/Main/Review"
import Locate from "../../component/Slider/Main/Locate"
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight, faChevronRight } from '@fortawesome/free-solid-svg-icons'


const Main = () => {
  const navi = useNavigate();
  const heaadingEstimate = () =>{
    navi("/request");
  }
  const headingLocate = () =>{
    navi("/Location")
  }

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const key = e.currentTarget.getAttribute('data-key');
    const onair = document.querySelector(".main_onairarrive");
    const location = document.querySelector(".main_locatearrive");
    const purpose = document.querySelector(".main_purposearrive");
    const estimate = document.querySelector(".main_estimatearrive");
      if (key === "1") {
        onair?.scrollIntoView({behavior:'smooth'});
      } else if(key === "2"){
        location?.scrollIntoView({behavior:'smooth'});
      } else if(key === "3"){
        purpose?.scrollIntoView({behavior:'smooth'});
      } else {
        estimate?.scrollIntoView({behavior:'smooth'});
      }
  }
  

 

  return (
    <div className='main_wrap'>
      <div className='main_remotewrap'>
        <div className='main_slogan'>
          <span className='main_burgundy'>구슬</span>, 좋은 인연을 만나는<br/>
          가장 좋은 방법
        </div>
        <div className='main_remote'>
          <div className='main_remote_right' style={{marginRight:'14px'}}>
            <div className='main_remote_short main_remote_form main_remoteonair' style={{marginBottom:'15px'}} onClick={handleClick} data-key="1">
              실시간
            </div>
            <div className='main_remote_long main_remote_form main_remotelocate' onClick={handleClick} data-key="2">
              위치별
            </div>
          </div>
          <div className='main_remote_left'>
            <div className='main_remote_long main_remote_form main_remotepurpose' style={{marginBottom:'15px'}} onClick={handleClick} data-key="3">
              목적별
            </div>
            <div className='main_remote_short main_remote_form main_remoteestimate' onClick={handleClick} data-key="4">
              견적내기
            </div>
          </div>
        </div>
      </div>
      <hr className='main_onairarrive' style={{visibility:'hidden'}}/>
      <div className='main_onairwrap'>
        <div className='main_onair_txt'>
          <span className='main_burgundy main_midtxt'>실시간 상담</span><br/>
          <span className='main_lightgray main_smalltxt' style={{marginLeft:'10px'}}>곧바로 상담 가능한 구슬님</span>
        </div>
        <div className='main_onair'>
          <OnAir/> 
        </div>
        <div className='main_ad'>
          <button className='main_vsmallheavytxt'>자세히보기</button>
        </div>
      </div>
      <div className='main_reviewwrap'>
        <div className='main_review_txt'>
            <span className='main_burgundy main_midtxt' style={{marginRight:'20px'}}>놀라운 경험</span><br/>
            <span className='main_lightgray main_smalltxt' style={{marginRight:'35px'}}>구슬을 선택해야 하는 이유</span>
        </div>
        <div className='main_review'>
          <Review/>
        </div>
      </div>
      <hr className='main_locatearrive' style={{visibility:'hidden'}}/>
      <div className='main_locatewrap'>
        <div className='main_locate_txt'>
          <span className='main_burgundy main_midtxt'>원하는 장소에서</span>
        </div>
        <div className='main_locate'>
          <div className='main_locate_extxt'>
            <span className='main_lightgray main_smalltxt'>당신이 원하는<br/>
            구슬님과</span>
            <span className='main_lightgray main_vsmalltxt' onClick={headingLocate}>만나러 가기 <FontAwesomeIcon style={{marginTop:'2px', height:'15px', color:'#8C2323'}} icon={faChevronCircleRight} /></span>
          </div>
          <div className='main_locatepic'>
            <Locate/>
          </div>
        
        
          
        </div>
      </div>
      <hr className='main_purposearrive' style={{visibility:'hidden'}}/>
      <div className='main_purposewrap'>
        <div className='main_purposetxt'>
            <span className='main_burgundy main_midtxt'>바라는 그대로</span><br/>
            <span className='main_lightgray main_smalltxt'>당신의 바람이 이뤄지는 그 때까지</span>
        </div>
        <div className='main_purpose'>
          <Purpose/>
        </div>
      </div>
      <hr className='main_estimatearrive' style={{visibility:'hidden'}}/>
      <div className='main_estimatewrap'>
        <div className='main_estimate_welcome'>
          <span className='main_bigtxt'><span>&nbsp;견적내기&nbsp;</span>&nbsp;란?</span>
          
        </div>
        <div className='main_estimate_detail'>
          <div className='main_estimate_detail1'>
            <span className='main_lightgray main_vsmallheavytxt'>견적내기는</span>
            <span className='main_smalltxt'>원하는 <span className='main_smalltxt main_burgundy'>구슬</span>님과</span>            
          </div>
          <div className='main_estimate_detail2'>
            <span className='main_lightgray main_vsmallheavytxt'>견적내기는</span>
            <span className='main_smalltxt'>원하는 <span className='main_smalltxt main_burgundy'>장소</span>에서</span>
          </div>
          <div className='main_estimate_detail3'>
            <span className='main_lightgray main_vsmallheavytxt'>견적내기는</span>
            <span className='main_smalltxt'>당신의 <span className='main_smalltxt main_burgundy'>바람</span>대로</span>
          </div>
        </div>
        <div className='main_estimate_box'>
          <div className='main_estimate_go'>
            <div className='main_estimate_txt'>
              <span className='main_smalltxt'><span className='main_burgundy'>견적내기</span>에 대해</span>
              <span>더 자세히 알아보고 싶으신가요?</span>
              <span className='main_vsmalltxt main_burgundy' onClick={heaadingEstimate}>더 알아보기 &gt; </span>
            </div>
          </div>
        </div>
      </div>
      <div className='main_footer'>
        <div className='main_foot_txt'>
          <div>
            회사소개 인재채용 기술 블로그 고객센터
          </div>
          <div>
            깃허브
          </div>
          <div>
            2003.02-2023.08 GOODSEUL | The GoodSeul | 서울시 마포구
            강남대로 94길20 7층 | 개인정보처리방침 | 이용약관
            DOPE BOYZ CLUB
          </div>
          <div>face insta you</div>
          <div>02 1234 5678</div>
        </div>
      </div>
    </div>
  )
}


export default Main
