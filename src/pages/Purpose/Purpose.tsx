import "../../style/purpose/purpose.scss"
import PurposeTags from '../../component/Purpose/PurposeTags'
import PurposeList from '../../component/Purpose/PurposeList'

const Purpose = () => {
  return (
    <div>
      <div className='purpose_tagwrap'>
        <span className='purpose_vsmallheavytxt'>당신의 바램</span>
        <div>
          <PurposeTags/>
        </div>
      </div>
      <div>
        <PurposeList/>
      </div>
    </div>
  )
}

export default Purpose
