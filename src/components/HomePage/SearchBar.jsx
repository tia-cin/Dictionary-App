import React, { useState } from "react";
import { searchWords } from "../../actions/actions";
import { useDispatch } from "react-redux/es/exports";
import SearchIcon from '@mui/icons-material/Search';
import { StyledInput } from "../../styles/childs";
import { StyledForm } from "../../styles/containers";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export const SearchBar = () => {
    const [ searchWord, setSearchWord ] = useState("");
    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(searchWords(searchWord));
        setSearchWord("");
    };

    return (
        <StyledForm>
            <div id="intruction">Write a word<KeyboardArrowRightIcon/></div>
            <form onSubmit={e => handleSubmit(e)}>
                <div><StyledInput type="text" value={searchWord} onChange={e => setSearchWord(e.target.value)}/></div>
                <SearchIcon onClick={e => handleSubmit(e)}/>
            </form>
        </StyledForm>
    )
};
