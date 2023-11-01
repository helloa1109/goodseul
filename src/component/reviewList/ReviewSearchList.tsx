import React from 'react';
import { useRecoilValue } from 'recoil';
import { searchResultState } from '../../recoil/Review/ReviewAtom';

function ReviewSearchList() {
    const searchResult = useRecoilValue(searchResultState);
    const imgurl = 'http://dopeboyzclub.ddns.net:7733/userprofile/';

    return (
        <div className='rs_listwrap'>
            {
            searchResult.map((item,idx)=>(
              <div 
              style={{ 
                backgroundColor: item.star === 10 ? "#8C2323" : 
              (item.star >= 7 && item.star < 10) ? "#2637BF" : 
              "#2FC02C"}}
               className='rs_box' 
               key={idx}
               >
                <div className='rs_top'>
                    <img 
                    className='rs_pic'
                    src={item.uprofile === 'NoImage'? `${imgurl}noImage.jpg` : `${imgurl}${item.uprofile}`} />
                </div>
                <div className='rs_bot'>
                    <div className='rs_name'>{item.goodseulName}</div>
                </div>
              </div>
            ))
          }
        </div>
    );
}

export default ReviewSearchList;