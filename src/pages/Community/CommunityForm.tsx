import React, { useState } from 'react';
import '../../style/Community/CommunityForm.scss';

import { CommunityWriteForm } from '../../hooks/Community/CommunityFormHooks';
import { CommunityFormApi } from '../../apis/Community/CommunityFormApis';
import { useNavigate } from 'react-router-dom';

const CommunityForm = () => {

  const [bSubject, setBSubject] = useState(''); //게시글 제목 담는 상태변수
  const [bContent, setBContent] = useState(''); //게시글 내용 담는 상태변수
  const [bCatagory, setBCatagory] = useState('자유게시판'); //게시글 카테고리 담는 상태변수
  const [bTag, setBTag] = useState('질문'); //게시글 태그 담는 상태변수

  const bNavi = useNavigate(); //라우터의 네비게이션 함수



  //폼 제출 핸들러 함수
  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    console.log("handleSubmit 함수 호출됨");
    console.log("제목:", bSubject);
    console.log("내용:", bContent);
    console.log("카테고리:", bCatagory);
    console.log("태그:", bTag);

    const boardDto: CommunityWriteForm = {
      subject: bSubject,
      content: bContent,
      category: bCatagory,
      tag: bTag,
    };

    //CommunityFormData API로 게시글 데이터를 전송하고 응답을 기다림
    CommunityFormApi(boardDto)
      .then(res => {
        if (res) {
          console.log("게시글 데이터 전송 성공");
          bNavi("/Community");
        }
      });
  }

  //취소 버튼 클릭시 내용 초기화 함수
  const handleCancel = () => {
    setBSubject('');
    setBContent('');
    setBCatagory('');
    setBTag('');

  }

  return (
    <div className='CommunityFormPage'>
      <form onSubmit={handleSubmit}>
        <h1>작성하기</h1>

        <div className='CommunityFormImg'>
          <svg xmlns="http://www.w3.org/2000/svg" width="127" height="110" viewBox="0 0 127 110" fill="none">
            <defs>
              <clipPath id="circleClip">
                <circle cx="63.5" cy="55" r="50" />
              </clipPath>
            </defs>
            <image href="http://dopeboyzclub.ddns.net:7733/resource/community/boardFrom.jpeg" width="100%" height="100%" clip-path="url(#circleClip)" preserveAspectRatio="xMidYMid slice" />
            <circle cx="102" cy="15" r="15" fill="#faedae" />
            <circle cx="15" cy="22" r="15" fill="#fcada8" />
            <circle cx="107" cy="90" r="20" fill="#b9e4c4" />
            <circle cx="7.5" cy="97.5" r="7.5" fill="#e3c7f1" />
          </svg>
        </div>

        <p className='CommunityFormSubTitle'>
          커뮤니티에 게시글을 작성합니다.<br />
          단, 개인정보에 유의하여 작성하십시오.
        </p>

        <div className='FormTitle'>
          <span>제목</span>
          <input type='text' name='title' placeholder='제목을 입력하세요' required onChange={(e) => setBSubject(e.target.value)} value={bSubject} />
        </div>

        <div className='FormTextArea'>
          <span>자세한 내용</span>
          <textarea name='contents' cols={30} rows={10} placeholder='내용을 입력하세요' required value={bContent} onChange={(e) => setBContent(e.target.value)} />
        </div>

        <div className='FormTags'>
          <span>태그</span>

          <div className='FormTagBtn'>
            <div className='BoardCatagory'>
              <select onChange={(e) => setBCatagory(e.target.value)}>
                <option value={'자유게시판'} selected>자유게시판</option>
                <option value={'의상/소품'}>의상 & 소품</option>
                <option value={'식품'}>식품</option>
                <option value={'무용/악사'}>무용 & 악사</option>
              </select>
            </div>

            <div className='BoardTags'>
              <select onChange={(e) => setBTag(e.target.value)}>
                <option value={'질문'} selected>질문</option>
                <option value={'구인'}>구인</option>
                <option value={'구직'}>구직</option>
                <option value={'기타'}>기타</option>
              </select>
            </div>
          </div>
        </div>

        <div className='FormBtn'>
          <button className='FormBtnWrite' type='submit'>글쓰기</button>
          <button onClick={handleCancel}>취소</button>
        </div>
      </form>

    </div>
  );
};

export default CommunityForm;
