import React, { useState, useEffect } from 'react';
import '../../style/OnAir/OnAirSlideTitle.scss';
import OnAirSlideCard from '../../component/OnAir/OnAirSlideCard';
import OnAirSlideCardFavorite from '../../component/OnAir/OnAirSlideCardFavorite';
import OnAirSlideCardPreimum from '../../component/OnAir/OnAirSlideCardPreimum';

const OnAirSlideTitle = () => {
  const [selectedItem, setSelectedItem] = useState<number>(0); // 초기 선택 항목을 0으로 설정
  const [selectedComponent, setSelectedComponent] = useState<React.ReactNode>(<OnAirSlideCardPreimum />);

  useEffect(() => {
    handleItemClick(selectedItem); // 컴포넌트가 마운트될 때 초기 선택 항목을 처리
  }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행


  const handleItemClick = (index: number) => {
    setSelectedItem(index);
    switch (index) {
      case 0:
        setSelectedComponent(<OnAirSlideCardPreimum />);
        break;
      case 1:
        setSelectedComponent(<OnAirSlideCardFavorite />);
        break;
      case 2:
        setSelectedComponent(<OnAirSlideCard />);
        break;
      case 3:
        setSelectedComponent(<OnAirSlideCard />);
        break;
      default:
        setSelectedComponent(<OnAirSlideCard/>);
        break;
    }
  };

  return (
    <div className='OnAirSlideTitlePage'>
       <ul>
        <li className={selectedItem === 0 ? 'selected' : ''} onClick={() => handleItemClick(0)}>프리미엄</li>
        <li className={selectedItem === 1 ? 'selected' : ''} onClick={() => handleItemClick(1)}>인기 급상승</li>
        <li className={selectedItem === 2 ? 'selected' : ''} onClick={() => handleItemClick(2)}>신규가입</li>
        <li className={selectedItem === 3 ? 'selected' : ''} onClick={() => handleItemClick(3)}>10분 상담</li>
       </ul>

       {selectedComponent && (
        <div className="selected-component">
          {selectedComponent}
        </div>
      )}
    </div>
  );
}

export default OnAirSlideTitle;
