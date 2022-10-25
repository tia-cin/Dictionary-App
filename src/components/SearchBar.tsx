import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { searchWords } from "../redux/actions";
import SearchIcon from "@mui/icons-material/Search";
import { Grid, TextField } from "@mui/material";

export const SearchBar: React.FC = () => {
  const [searchWord, setSearchWord] = useState<string>("");
  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch<any>(searchWords(searchWord));
    setSearchWord("");
  };

  return (
    <Grid item sx={{ my: 2 }}>
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
