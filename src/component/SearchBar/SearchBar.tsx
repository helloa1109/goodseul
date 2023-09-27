import axios from 'axios';
import React, { useState } from 'react';

function SearchBar() {

    const [searchTerm, setSearchTerm] = useState('')
    const changeSearchItem :React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setSearchTerm(e.target.value)
    }

    const handleSearch = () => {
        
        setSearchTerm('');
    };

    return (
        <div className='searchbar'>
            <input
                type="text"
                placeholder="검색어를 입력하세요"
                value={searchTerm}
                onChange={changeSearchItem}
            />
            <button onClick={handleSearch}>검색</button>     
        </div>
    );
}

export default SearchBar