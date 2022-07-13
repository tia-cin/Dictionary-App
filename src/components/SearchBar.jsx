import React, { useState } from "react";

export const SearchBar = () => {
    const [ searchWord, setSearchWord ] = useState("");
    
    return (
        <form>
            <input type="text" value={searchWord} onChange={e => setSearchWord(e.target.value)}/>
            <button type="submit">Search</button>
        </form>
    )
};
