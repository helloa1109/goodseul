import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { rIdxState, searchResultState } from '../../recoil/Review/ReviewAtom';
import ReviewModal from '../Review/ReviewModal';

function ReviewSearchList() {
    const searchResult = useRecoilValue(searchResultState);
    const imgurl = 'http://dopeboyzclub.ddns.net:7733/userprofile/';
    const [rIdx, setRIdx] = useRecoilState(rIdxState);

    const getUidx = (ridx:number) =>{
      setRIdx(ridx);
      console.log(ridx);
    }

    return (
        <div className='rs_listwrap'>
            {  
            searchResult.length === 0?(
              <div className="rs_noResult">
                검색결과가 
                <span className='review_burgundy'> 존재</span>하지 않습니다.</div>
            ) 
            : 
            searchResult.map((item,idx)=>(
              <div 
              style={{ 
                backgroundColor: item.star === 10 ? "#8C2323" : 
              (item.star >= 7 && item.star < 10) ? "#2637BF" : 
              "#2FC02C"}}
               className='rs_box' 
               key={idx}
               onClick={(e)=>{getUidx(item.ridx)}}
               >
                <div className='rs_top'>
                    <img 
                    className='rs_pic'
                    src={item.uprofile === 'NoImage'? `${imgurl}noImage.jpg` : `${imgurl}${item.uprofile}`} />
                </div>
                <div className='rs_bot'>
                    <div className='rs_subject review_vxsmalltxt review_mlightgray'>" {item.rsubject} "</div>
                    <div className='rs_name review_smalltxt review_mlightgray'>{item.goodseulName}</div>
                    <div className='rs_btn'>
                      <ReviewModal/> 
                    </div>
                </div>
              </div>
            ))
          }
        </div>
    );
}

export default ReviewSearchList;