import { useRecoilValue } from "recoil";
import { searchResultPState } from "../../recoil/Purpose/PurposeAtom";

function PurposeList() {

    const purposeList = useRecoilValue(searchResultPState);
    const imgurl = 'http://dopeboyzclub.ddns.net:7733/userprofile/';

    return (
        <div className='purpose_listwrap'>
             <span className='purpose_vsmallheavytxt purpose_burgundy'>검색결과</span>
        {
            purposeList.map((item, idx)=>(
                <div className='purpose_list' key={idx}>
                    <img className="purpose_pic" src={item.userProfile === 'NoImage'? `${imgurl}noImage.jpg` : `${imgurl}${item.userProfile}`}  alt="pic"/>
                    <div className="purpose_name">{item.goodseulDto.goodseulName}</div>
                    

                </div>
                ))
        }

            </div>
    );
}

export default PurposeList;