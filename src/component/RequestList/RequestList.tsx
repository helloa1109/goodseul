import React from 'react'
import "../../style/RequestList/RequestList.scss";
import arrow from "../../image/Request/Vector.png";
import profile from "../../image/Request/second.png";
import { useRecoilState } from 'recoil';
import { ListSelectCategory, ListSelectRegion } from '../../recoil/RequestListAtom/RequestListAtom';
const RequestList = () => {

    const [listSelectCategory, setListSelectCategory] = useRecoilState(ListSelectCategory);
    const [listSelectRegion, setListSelectRegion] = useRecoilState(ListSelectRegion);

    const handleSelectCategory = () => {
        if (listSelectRegion) {
            setListSelectRegion(false);
        }
        setListSelectCategory(!listSelectCategory);
    }

    const handleSelectRegion = () => {
        if (listSelectCategory) {
            setListSelectCategory(false);
        }
        setListSelectRegion(!listSelectRegion);
    }
    return (
        <div className='RequestList'>
            <div className='RequestListGroup'>
                <div className='RequestListTitle'>
                    <span>카테고리</span>
                </div>
                <div className='RequestListMenuGroup'>
                    <div className='RequestListAccordion'>
                        <div className='RequestListCategory' onClick={handleSelectCategory}>
                            <span>태그</span>
                            <img src={arrow} alt='arrow' />
                        </div>
                        <div className='RequestListRegin' onClick={handleSelectRegion}>
                            <span>지역</span>
                            <img src={arrow} alt='arrow' className='RequestListArrowImg' />
                        </div>
                    </div>
                    <div className='isOpenListCategory'>
                    {listSelectCategory && (
                        <ul>
                            <li>
                                축하
                            </li>
                            <li>
                                장례/제사
                            </li>
                            <li>
                                질병/회복
                            </li>
                            <li>
                                승진/학업
                            </li>
                            <li>
                                개업/사업
                            </li>
                        </ul>
                    )}
                    </div>
                    <div className='isOpenListRegion'>
                    {listSelectRegion && (
                        <ul>
                            <li>
                                서울
                            </li>
                            <li>
                                경기/인천
                            </li>
                            <li>
                                충청도
                            </li>
                            <li>
                                강원도
                            </li>
                            <li>
                                제주
                            </li>
                        </ul>
                    )}
                    </div>
                </div>
                <div className='RequestListView'>
                    <div className='RequestListSection'>
                        <div className='RequestListLeft'>
                            <div className='RequestListProfile'>
                                <img src={profile} alt='arrow' className='RequestListProfileImg'/>
                            </div>
                            <div className='RequestListUserInfo'>
                                <div className='RequestListUserNick'>
                                    이상혁
                                </div>
                                <div className='RequestListMore'>
                                    견적 내용 보기
                                </div>
                            </div>
                        </div>
                        <div className='RequestListRight'>
                            <div className='RequestListReservationInfo'>
                                <span>2023.09.22</span>
                                <span>서울시 강남구</span>
                            </div>
                            <div className='RequestListTagInfo'>
                                <span>경기도</span>
                                <span>사업</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RequestList
