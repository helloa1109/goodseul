import React from 'react'
import SearchBar from "../../component/SearchBar/SearchBar"
import "../../style/purpose/purpose.scss"
import PurposeTags from '../../component/Purpose/PurposeTags'

const Purpose = () => {
  return (
    <div>
      <div className='purpose_tagwrap'>
        <span className='purpose_vsmallheavytxt'>당신의 바램</span>
        <div>
          <PurposeTags/>
        </div>
      </div>
      <div className='purpose_listwrap'>
       <span className='purpose_vsmallheavytxt purpose_burgundy'>검색결과</span>
        
      </div>
    </div>
  )
}

export default Purpose
