import react from 'react';
import './searchbox.style.css';

export const SearchBox=({placeholder,handlechange})=> (
    <input
    className='search' 
    type="search" 
    placeholder={placeholder} 
    onChange={handlechange}
        />
);