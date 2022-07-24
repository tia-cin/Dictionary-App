import React, { useState } from "react";
import { searchWords } from "../../actions/actions";
import { useDispatch } from "react-redux/es/exports";

export const SearchBar = () => {
    const [ searchWord, setSearchWord ] = useState("");
    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(searchWords(searchWord));
        setSearchWord("");
    };

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <input type="text" value={searchWord} onChange={e => setSearchWord(e.target.value)}/>
            <button type="submit" onSubmit={e => handleSubmit(e)}>Search</button>
        </form>
    )
};
