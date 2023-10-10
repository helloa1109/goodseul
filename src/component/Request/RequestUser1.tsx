import React, { useState } from 'react'
import "../../style/Request/Request.scss";
import 'react-calendar/dist/Calendar.css';
import arrow from "../../image/Request/Vector.png";
import light from "../../image/Request/light.png";
import location from "../../image/Request/pin.png";
import Calendar from 'react-calendar';
import { useNavigate } from "react-router-dom";
import { CategoryValue, RegionValue, ShowCalendar, ShowCategory, ShowRegion } from '../../recoil/Request/RequsetAtom';
import { useRecoilState } from 'recoil';
import moment from 'moment';
import { RequestWrite } from '../../apis/Request/RequestApi';
import { motion } from 'framer-motion' 
import styled from "styled-components";

const RequestUser1 = () => {
    const [showCalendar, setShowCalendar] = useRecoilState(ShowCalendar);
    const [showRegin, setShowRegion] = useRecoilState(ShowRegion);
    const [showCategory, setShowCategory] = useRecoilState(ShowCategory);
    const [date, setDate] = useState(new Date());
    const [regionValue, setRegionValue] = useRecoilState(RegionValue);
    const [categoryValue, setCategoryValue] = useRecoilState(CategoryValue);

    const [requestDetails, setRequestDetails] = useState("");


    const navigate = useNavigate();


    const handleRequestSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (!regionValue || !date || !categoryValue || !requestDetails) {
            alert("모두 입력해주세요");
        } else {
            const requestData = {
                desiredDate: date,
                details: requestDetails,
                location: regionValue,
                purpose: categoryValue,
            };

            RequestWrite(requestData);
            alert("견적작성이 완료되었습니다.");
            navigate("/");
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
        console.log("열닫", showRegin);
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

    const handleDateChange = (newDate: any) => {
        setDate(newDate);
        setShowCalendar(false);
        console.log("빠이", newDate);
    };


    const MIN_Y = 60; // 바텀시트가 최대로 높이 올라갔을 때의 y 값
    const MAX_Y = window.innerHeight - 60;  // 바텀시트가 최소로 내려갔을 때의 y 값  752
    const BOTTOM_SHEET_HEIGHT = window.innerHeight - MIN_Y; // 바텀시트의 세로 길이 752

    console.log(BOTTOM_SHEET_HEIGHT);

    console.log("y", MAX_Y);


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
                            <p>날짜  </p><span>{moment(date).format("YY-MM-DD")}</span>
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
                            <p><img src={location} alt='' className='lcoation' />지역 </p><span>{regionValue}</span>
                        </div>
                    ) : (
                        <p><img src={location} alt='' className='lcoation' />지역</p>
                    )}
                    <div className='ArrowIcon'>
                        <img src={arrow} alt='arrow' />
                    </div>
                </div>
                {showRegin && (
                    <div className='modalRectangle'>
                        <div className='modalFrame' onClick={handleReigonClick} />

                        {/* <motion.div
                            drag="y" 
                            className='bottom-sheet-container'
                            initial="visible"
                            variants={{
                                visible: { y: 0 },
                                hidden: { y: "100%" }
                            }}
                            dragConstraints={{ top: 500 }}
                            dragElastic={0.2}
                            onDragEnd={(event, info) => {
                                const { point } = info;
                                // 모달의 아래 경계에 도착했을 때
                                if (point.y >= BOTTOM_SHEET_HEIGHT) {
                                    setShowRegion(false);
                                }
                            }}
                        > */}
                            <div className='showRegion'>
                                <ul>
                                    <li className='CategoryFirst'>
                                        <div className='showClose'>
                                            <span onClick={handleReigonClick}>지역을 선택해주세요</span>
                                            <span>* 중복선택 불가능</span>

                                        </div>
                                    </li>
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
                        {/* </motion.div> */}
                    </div>
                )}
                <div className='RequestSelect' onClick={handleCategoryClick}>
                    {categoryValue ? (
                        <div className='isClickRequestCategory'>
                            <p>분류 </p><span>{categoryValue}</span>
                        </div>
                    ) : (
                        <p>분류</p>
                    )}
                    <div className='ArrowIcon'>
                        <img src={arrow} alt='arrow' />
                    </div>
                </div>
                {showCategory && (
                    <div className='modalRectangle'>
                        <div className='modalFrame' onClick={handleCategoryClick}></div>
                        <div className='showCategory'>
                            
                            <ul>
                                <li className='RegionFirst'>
                                    <div className='showClose'>
                                        <span onClick={handleCategoryClick}>분야별 카테고리를 선택해주세요</span>
                                        <span>* 중복선택 불가능</span>
                                    </div>
                                </li>
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

const BackgroundOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;
  background: black;
`;

      <BackgroundOverlay
        variants={{
          opened: {
            backdropFilter: 'blur(1px)',
            pointerEvents: 'all',
            opacity: 0.7,
          },
          closed: {
            backdropFilter: 'blur(0px)',
            pointerEvents: 'none',
            opacity: 0,
          },
        }}
      />

export default RequestUser1
