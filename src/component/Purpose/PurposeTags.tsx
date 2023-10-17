import React, { useState } from 'react';
import { purposeList } from '../../apis/Purpose/PurposeList';

function PurposeTags() {

   

    const handlePTag:React.MouseEventHandler<HTMLDivElement> = (e) =>{
        const selectedTag = (e.target as HTMLDivElement).innerText;
        
       
        purposeList(selectedTag)
        .then(res=>{
            console.log(res.data);
        })
    }


    return (
        <div className='purpose_tagList'>
          <div className='purpose_tag' onClick={handlePTag}>
            <img src="" alt="" />
            <span>축하</span>
          </div>
          <div className='purpose_tag' onClick={handlePTag}>
            <img src="" alt="" />
            <span>제사</span>
          </div>
          <div className='purpose_tag' onClick={handlePTag}>
            <img src="" alt="" />
            <span>회복</span>
          </div>
          <div className='purpose_tag' onClick={handlePTag}>
            <img src="" alt="" />
            <span>사업</span>
          </div>
          <div className='purpose_tag' onClick={handlePTag}>
            <img src="" alt="" />
            <span>액땜</span>
          </div>
        </div>
    );
}

export default PurposeTags;