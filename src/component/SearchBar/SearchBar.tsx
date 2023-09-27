import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import React, { useState } from 'react';
import "../../style/SearchBar/SearchBar.scss"

function SearchBar() {

    const [searchTerm, setSearchTerm] = useState('')
    const changeSearchItem :React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setSearchTerm(e.target.value)
    }

    const handleSearch = () => {
        
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