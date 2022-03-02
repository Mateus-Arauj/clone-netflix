import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

import './SearchBar.css'

const SearchBar = ()=>{
    return (
        <div className = "search-bar">
            <input type="text" className="input-search" placeholder='Procurar'></input>
            <SearchIcon/>
        </div>
    )
}

export default SearchBar;

