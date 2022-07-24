import React, { useState } from "react";
import { searchWords } from "../../actions/actions";

export const SearchBar = () => {
    const [ searchWord, setSearchWord ] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        searchWords(searchWord);
        setSearchWord("");
    };

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <input type="text" value={searchWord} onChange={e => setSearchWord(e.target.value)}/>
            <button type="submit" onSubmit={e => handleSubmit(e)}>Search</button>
        </form>
    )
};
