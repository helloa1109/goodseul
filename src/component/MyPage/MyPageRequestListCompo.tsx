import React,{useEffect} from 'react'
import { getMyPageRequestList } from '../../apis/MyPage/MyPageRequestListApi';
import { useRecoilState, useRecoilValue } from 'recoil';
import { MyPageRequestListState } from '../../recoil/MyPage/MyPageRequestListAtom';
import "../../style/MyPage/MyPageRequestList.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';

const MyPageRequestListCompo = () => {
  
  const MyPageRequestListValue=useRecoilValue(MyPageRequestListState);
  const [MyRequestList,setMyRequestList]=useRecoilState(MyPageRequestListState);


  useEffect(()=>{
    const fetchData = async () => {
      try {
        const res = await getMyPageRequestList();
        if(res){
          setMyRequestList(res.data)
        }
      }catch (error){
        console.error("쿠폰에러",error);
      }
    }; fetchData();
  },[setMyRequestList]);
  

  return (
    <div className='MyPageRequest'>
        {MyPageRequestListValue.map((requestlist,idx)=>
        <div className='MyPageRequestSectionBox' key={idx}>
          <div className='Leftbox'>
          <img className='GoodselImg' src={`http://dopeboyzclub.ddns.net:7733/userprofile/${requestlist.userProfile}`} alt='견적' />
          
          </div>

          <div className='Midbox'>
            <div className='Subjectbox'>
            견적 요청 사항 
            </div>

            <div className='Detailbox'>
            {requestlist.details}
            </div>

            <div className='Purposebox'>
            {requestlist.purpose}
            </div>

          </div>

          <div className='Rightbox'>

            <div className='WriteDatebox'>
            {requestlist.writeDate.split('T')[0]}
            </div>

            <div className='Locationbox'>
            {requestlist.location}
            </div>

            <div className='Etcbox'>
              <div className='EtcLeftbox'>
              <FontAwesomeIcon className='Favoriteheart' icon={faComment} /> <br/>
              채팅
              </div>

              <div className='EtcRightbox'>
              <FontAwesomeIcon className='Favoriteheart' icon={faTrash} /> <br/>
               삭제
             </div>
            </div>

          </div>

        </div>
        )}  
    </div>
  )
}

export default MyPageRequestListCompo
