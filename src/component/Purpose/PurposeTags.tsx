import React, { useState } from 'react';
import { purposeList } from '../../apis/Purpose/PurposeList';
import { useRecoilState } from 'recoil';
import { searchResultPState } from '../../recoil/Purpose/PurposeAtom';

function PurposeTags() {

    const [searchResultP, setSearchResultP] = useRecoilState(searchResultPState);

    const handlePTag:React.MouseEventHandler<HTMLDivElement> = (e) =>{
        const selectedTag = e.currentTarget.getAttribute('data-key')!;
        console.log(selectedTag);
        purposeList(selectedTag)
        .then(res=>{
            console.log(res.data);
            setSearchResultP(res.data);
        })
    }


    return (
        <div className='purpose_tagList'>
          <div className='purpose_tag' onClick={handlePTag} data-key='축하'>
            <img src="" alt="pic" />
            <span>축하</span>
          </div>
          <div className='purpose_tag' onClick={handlePTag} data-key='제사'>
            <img src="" alt="pic" />
            <span>제사</span>
          </div>
          <div className='purpose_tag' onClick={handlePTag} data-key='회복'>
            <img src="" alt="pic" />
            <span>회복</span>
          </div>
          <div className='purpose_tag'>
            <img src="" alt="pic" />
            <span>사업</span>
          </div>
          <div className='purpose_tag'>
            <img src="" alt="pic" />
            <span>액땜</span>
          </div>
        </div>
    );
}

export default PurposeTags;