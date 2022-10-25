import React from "react";
import { useSelector } from "react-redux";
import logo from "../../assets/dictionary.png";
// components
import { SearchBar } from "../components/SearchBar";
import { CardsContainer } from "../components/CardsContainer";
import { RootReducer } from "../redux/store";
// MUI
import { Grid } from "@mui/material";

export const Home: React.FC = () => {
  const { words } = useSelector((state: RootReducer) => state);

  return (
    <Grid container alignItems="center" direction="column">
      <Grid item sx={{ my: 2 }}>
        <img src={logo} alt="dictionary-logo" width="100" />
      </Grid>
      <SearchBar />
      <CardsContainer words={words} />
    </Grid>
  );
};
