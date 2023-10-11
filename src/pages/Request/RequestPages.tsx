import React from 'react'
import RequestUser1 from '../../component/Request/RequestUser1'
import RequestUser2 from '../../component/Request/RequestUser2'
import RequestUser3 from '../../component/Request/RequestUser3'
import "../../style/Request/RequestSlide.scss";

const RequestPages = () => {
  return (
    <div className='RequestSlidePages'>
      <RequestUser1/>
      <RequestUser2/>
      <RequestUser3/>
    </div>
  )
}

export default RequestPages
