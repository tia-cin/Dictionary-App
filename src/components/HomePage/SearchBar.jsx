import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { searchWords } from "../../redux/actions.ts";
// MUI
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export const SearchBar = () => {
  const [searchWord, setSearchWord] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchWords(searchWord));
    setSearchWord("");
  };

  return (
    <div>
      <div id="intruction">
        Write a word
        <KeyboardArrowRightIcon />
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <input
            type="text"
            value={searchWord}
            onChange={(e) => setSearchWord(e.target.value)}
          />
        </div>
        <SearchIcon onClick={(e) => handleSubmit(e)} />
      </form>
    </div>
  );
};
