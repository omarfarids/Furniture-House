import React,{useContext} from 'react';
import { AppContext } from './context';



function SearchForm() {
    const {searchForm , setSearchForm} = useContext(AppContext);
    
    return (
        <div>
            <input className='m-3 mt-5 mx-auto d-block rounded-pill search-form' placeholder='What are you looking for...' value={searchForm} onChange={(element)=>setSearchForm(element.target.value)} />
        </div>
    )
}

export default SearchForm