import React, { useState } from 'react';
import { purposeList } from '../../apis/Purpose/PurposeList';
import { useRecoilState } from 'recoil';
import { searchResultPState } from '../../recoil/Purpose/PurposeAtom';
import { PurposeBData } from '../../hooks/Purpose/Purpose';

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
          <div className='purpose_tag purpose_vsmalltxt' onClick={handlePTag} data-key='안녕/행운'>
            <img src="" alt="pic" />
            <span>안녕/행운</span>
          </div>
          <div className='purpose_tag purpose_vsmalltxt' onClick={handlePTag} data-key='건강/쾌차'>
            <img src="" alt="pic" />
            <span>건강/쾌차</span>
          </div>
          <div className='purpose_tag purpose_vsmalltxt' onClick={handlePTag} data-key='혼사/잔치'>
            <img src="" alt="pic" />
            <span>혼사/잔치</span>
          </div>
          <div className='purpose_tag purpose_vsmalltxt' onClick={handlePTag} data-key='장례/제사'>
            <img src="" alt="pic" />
            <span>장례/제사</span>
          </div>
          <div className='purpose_tag purpose_vsmalltxt' onClick={handlePTag} data-key='성취/축원'>
            <img src="" alt="pic" />
            <span>성취/축원</span>
          </div>
        </div>
    );
}

export default PurposeTags;