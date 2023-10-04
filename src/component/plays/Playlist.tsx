import React from 'react';
import PlayBanner from './PlayBanner';



const Playlist = () => {
    
    return (
        <ul>
            <PlayBanner dest='shop' src="http://dopeboyzclub.ddns.net:7733/testimg/cb.png"
            str='구슬샵.' str2='여기 설명 한줄 추가' order={0}/>
            <PlayBanner dest='atd' src="http://dopeboyzclub.ddns.net:7733/testimg/dailyimg.png"
            str='출석체크.' str2='여기 설명 한줄 추가' order={1}/>
            <PlayBanner dest='ball' src="http://dopeboyzclub.ddns.net:7733/testimg/wow.png"
            str='플레이1.' str2='애오오옹' order={0}/>
            <PlayBanner dest='null' src="http://dopeboyzclub.ddns.net:7733/testimg/dailyimg.png"
            str='구슬샵.' str2='여기 설명 한줄 추가' order={1}/>
        </ul>
    );
};

export default Playlist;