import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import React, { useState } from 'react';
import "../../style/SearchBar/SearchBar.scss"
import { searchResult } from '../../apis/SearchBar/SearchBar';
import { useLocation, useNavigate } from 'react-router-dom';


function SearchBar() {

    const serverUrl = "http://dopeboyzclub.ddns.net:7780"
    const currentPage = useLocation();
    const nav = useNavigate();

    const [searchTerm, setSearchTerm] = useState<string>('')
    const changeSearchItem :React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setSearchTerm(e.target.value)
    }

    const handleSearch = () => {
        searchResult(searchTerm)
        .then(res=>{
            if(currentPage.pathname === "/Review")
            nav("/ReviewSearch");
            console.log(res.data);
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