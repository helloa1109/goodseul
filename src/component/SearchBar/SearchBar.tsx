import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import React, { useState } from 'react';
import "../../style/SearchBar/SearchBar.scss"
import { goSearch } from '../../apis/SearchBar/SearchBar';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { ReviewCData } from '../../hooks/Review/Review';
import { searchResultState } from '../../recoil/Review/ReviewAtom';


function SearchBar() {

    const serverUrl = "http://dopeboyzclub.ddns.net:7780"
    const currentPage = useLocation();
    const nav = useNavigate();

    const [searchTerm, setSearchTerm] = useState<string>('')
    const [searchResult, setSearchResult] = useRecoilState(searchResultState);
    const changeSearchItem :React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setSearchTerm(e.target.value)
    }

    const handleSearch = () => {
        goSearch(searchTerm)
        .then(res=>{
            if(currentPage.pathname === "/Review"){
                setSearchResult(res.data.reviews);
                nav("/ReviewSearch");
               
            }else{
                setSearchResult(res.data.reviews);
            }
        })
        
        setSearchTerm('');
    };

    return (
        <div className='searchBar'>
             
            <input
                type="text"
                placeholder="검색어를 입력하세요"
                value={searchTerm}
                onChange={changeSearchItem}
                className='searchBar_main'
                
            />
            <FontAwesomeIcon 
                icon={faMagnifyingGlass} 
                className='searchBar_glass'
                onClick={handleSearch}
            />  
        </div>
    );
}

export default SearchBar