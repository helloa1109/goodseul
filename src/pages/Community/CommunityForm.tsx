import React, { useState } from 'react';
import '../../style/Community/CommunityForm.scss';

const CommunityForm = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [selectedTag, setSelectedTag] = useState<number | null>(null);

  const handleCategoryClick = (index: number) => {
    setSelectedCategory(index);
  };

  const handleTagClick = (index: number) => {
    setSelectedTag(index);
  };

  return (
    <div className='CommunityFormPage'>
      <h1>작성하기</h1>

      <div className='CommunityFormImg'>
        <svg xmlns="http://www.w3.org/2000/svg" width="127" height="110" viewBox="0 0 127 110" fill="none">
          <circle cx="60" cy="57" r="50" fill="#D9D9D9" />
          <circle cx="102" cy="15" r="15" fill="#D9D9D9" />
          <circle cx="15" cy="22" r="15" fill="#D9D9D9" />
          <circle cx="107" cy="90" r="20" fill="#D9D9D9" />
          <circle cx="7.5" cy="97.5" r="7.5" fill="#D9D9D9" />
        </svg>
      </div>

      <p className='CommunityFormSubTitle'>
        커뮤니티에 게시글을 작성합니다.<br />
        단, 개인정보에 유의하여 작성하십시오.
      </p>

      <div className='FormTitle'>
        <span>제목</span>
        <input type='text' name='title' placeholder='제목을 입력하세요' />
      </div>

      <div className='FormTextArea'>
        <span>자세한 내용</span>
        <textarea name='contents' cols={30} rows={10} placeholder='내용을 입력하세요' />
      </div>

      <div className='FormTags'>
        <span>태그</span>

        <div className='FormTagBtn'>
          <div className='BoardCatagory'>
            {['자유게시판', '의상 & 소품', '식품', '무용 & 악사'].map((category, index) => (
              <button
              key={index}
              className={`active${index + 1} ${selectedCategory === index ? 'active' : ''}`}
              onClick={() => handleCategoryClick(index)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className='BoardTags'>
            {['질문', '구인', '구직', '기타'].map((tag, index) => (
              <button
              key={index}
              className={`active${index + 5} ${selectedTag === index ? 'active' : ''}`}
              onClick={() => handleTagClick(index)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className='FormBtn'>
        <button className='FormBtnWrite'>글쓰기</button>
        <button>취소</button>
      </div>
    </div>
  );
};

export default CommunityForm;
