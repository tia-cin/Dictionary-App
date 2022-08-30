import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { searchWords } from "../../redux/actions";
// MUI
import SearchIcon from "@mui/icons-material/Search";
import { Grid, TextField, styled } from "@mui/material";

export const SearchBar = () => {
  const [searchWord, setSearchWord] = useState<string>("");
  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch<any>(searchWords(searchWord));
    setSearchWord("");
  };

  const StyledInput = styled(TextField)`
    div {
      margin: 0;
    }
    label: {
      top: -10px;
    }
  `;

  return (
    <Grid item>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Grid container justifyContent="center" alignItems="center">
          <SearchIcon onClick={(e) => handleSubmit(e)} sx={{ mt: 2, mr: 1 }} />
          <TextField
            size="small"
            sx={{ margin: 0 }}
            variant="standard"
            label="Write a word"
            value={searchWord}
            onChange={(e) => setSearchWord(e.target.value)}
          />
        </Grid>
      </form>
    </Grid>
  );
};
