import React from 'react'
import SearchBar from "../../component/SearchBar/SearchBar"
import "../../style/purpose/purpose.scss"

const Purpose = () => {
  return (
    <div>
      <div className='purpose_searchwrap'>
        <SearchBar/>
      </div>
      <div className='purpose_tagwrap'>

      </div>
      <div className='purpose_listwrap'>
        <div className='purpose_list_txt'>
          검색결과
        </div>
      </div>
    </div>
  )
}

export default Purpose
