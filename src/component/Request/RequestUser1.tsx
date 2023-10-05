import React, { useState } from 'react'
import "../../style/Request/Request.scss";
import 'react-calendar/dist/Calendar.css';
import arrow from "../../image/Request/Vector.png";
import light from "../../image/Request/light.png";
import Calendar from 'react-calendar';
import { CategoryValue, RegionValue, ShowCalendar, ShowCategory, ShowRegion } from '../../recoil/Request/RequsetAtom';
import { useRecoilState } from 'recoil';
import moment from 'moment';
import { RequestWrite } from '../../apis/Request/RequestApi';

const RequestUser1 = () => {
    const [showCalendar, setShowCalendar] = useRecoilState(ShowCalendar);
    const [showRegin, setShowRegion] = useRecoilState(ShowRegion);
    const [showCategory, setShowCategory] = useRecoilState(ShowCategory);
    const [date, setDate] = useState(new Date());
    const [regionValue, setRegionValue] = useRecoilState(RegionValue);
    const [categoryValue, setCategoryValue] = useRecoilState(CategoryValue);


    const [requestDetails, setRequestDetails] = useState("");


    const handleRequestSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (!regionValue || !date || !categoryValue || !requestDetails) {
            alert("모든 입력해주세요");
        } else {
            const requestData = {
                desiredDate: date,
                details: requestDetails,
                location: regionValue,
                purpose: categoryValue,
            };
    
            RequestWrite(requestData);
        }
    };
    

    const handleDateClick = () => {
        if (showRegin || showCategory) {
            setShowRegion(false);
            setShowCategory(false);
        }
        setShowCalendar(!showCalendar);
    };

    const handleReigonClick = () => {
        if (showCalendar || showCategory) {
            setShowCalendar(false);
            setShowCategory(false);
        }
        setShowRegion(!showRegin);
    };

    const handleCategoryClick = () => {
        if (showCalendar || showRegin) {
            setShowRegion(false);
            setShowCalendar(false);
        }
        setShowCategory(!showCategory);
    }

    const handleRegionChange = (event: any) => {
        const selectedRegion = event.target.textContent;
        setRegionValue(selectedRegion);
        setShowRegion(false);
    };

    const handleCategoryChange = (event: any) => {
        const selectedCategory = event.target.textContent;
        setCategoryValue(selectedCategory);
        setShowCategory(false);
    }

    const handleDateChange = (newDate:any) => {
        setDate(newDate);
        setShowCalendar(false);
        console.log("빠이",newDate);
    };

    return (
        <div className='RequsetMain'>
            <div className='RequestFirstText'>
                굿을 더 <span>슬</span>기롭게 하는 방법
            </div>
            <div className='RequestSecondTextSection'>
                <div className='RequestSecondText'>당신의 바람대로</div>
                <div className='RequestSecondText'>견적요청</div>을 통해
                <div className='RequestSecondText'>당신만의 구슬님을 찾아보세요.</div>
            </div>
            <div className='RequestMenu'>
                <div className={`RequestSelect ${showCalendar ? 'active' : ''}`} onClick={handleDateClick}>
                    {date ? (
                        <div className='isClickRequestDate'>
                            <p>날짜 : </p><span>{moment(date).format("YY-MM-DD")}</span>
                        </div>
                    ) : (
                        <p>날짜</p>
                    )}
                    <div className='ArrowIcon'>
                        <img src={arrow} alt='arrow' />
                    </div>
                </div>
                {showCalendar && (
                    <div className='CalendarContainer'>
                        <Calendar onChange={handleDateChange} value={date} showNeighboringMonth={false}
                            formatDay={(locale, date) => moment(date).format('D')} next2Label={null}
                            prev2Label={null} />
                    </div>
                )}
                <div className='RequestSelect' onClick={handleReigonClick}>
                    {regionValue ? (
                        <div className='isClickRequestRegion'>
                            <p>지역 : </p><span>{regionValue}</span>
                        </div>
                    ) : (
                        <p>지역</p>
                    )}
                    <div className='ArrowIcon'>
                        <img src={arrow} alt='arrow' />
                    </div>
                </div>
                {showRegin && (
                    <div className='showRegion'>
                        <ul>
                            <li onClick={handleRegionChange}>
                                서울
                            </li>
                            <li onClick={handleRegionChange}>
                                경기/인천
                            </li>
                            <li onClick={handleRegionChange}>
                                충청도
                            </li>
                            <li onClick={handleRegionChange}>
                                경상도
                            </li>
                            <li onClick={handleRegionChange}>
                                강원도
                            </li>
                            <li onClick={handleRegionChange}>
                                제주
                            </li>
                        </ul>
                    </div>
                )}
                <div className='RequestSelect' onClick={handleCategoryClick}>
                    {categoryValue ? (
                        <div className='isClickRequestCategory'>
                            <p>분류 : </p><span>{categoryValue}</span>
                        </div>
                    ) : (
                        <p>분류</p>
                    )}
                    <div className='ArrowIcon'>
                        <img src={arrow} alt='arrow' />
                    </div>
                </div>
                {showCategory && (
                    <div className='showCategory'>
                        <ul>
                            <li onClick={handleCategoryChange}>
                                축하
                            </li>
                            <li onClick={handleCategoryChange}>
                                장례/제사
                            </li>
                            <li onClick={handleCategoryChange}>
                                질병/회복
                            </li>
                            <li onClick={handleCategoryChange}>
                                승진/학업
                            </li>
                            <li onClick={handleCategoryChange}>
                                개업/사업
                            </li>
                        </ul>
                    </div>
                )}

                <div className='RequestWriteForm'>
                    <textarea className='RequestWriteInside'
                        placeholder='견적 요청 내용 작성하기&#13;빠른 견적시 작성한 게시글은 7일 뒤에 삭제됩니다'
                        value={requestDetails}
                        onChange={(e) => setRequestDetails(e.target.value)}>
                    </textarea>
                </div>
                <div className='RequestButtonGroup'>
                    <button onClick={handleRequestSubmit}>
                        <img src={light} alt='light' className='lightbutton' />
                        빠른 견적 요청 하기</button>
                </div>
            </div>
        </div>
    )
}

export default RequestUser1
