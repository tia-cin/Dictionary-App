import React from "react";
import { useSelector } from "react-redux";
import { SearchBar, WordCard } from "../components";
import { RootReducer } from "../redux/store";
import { Grid, Alert, AlertTitle } from "@mui/material";
import { WordAlert, WordData } from "../types";

export const Home: React.FC = () => {
  const { words, failedMessage } = useSelector((state: RootReducer) => state);

  return (
    <div className="h-screen pt-20">
      <div className="text-center">
        <p className="font-semibold text-2xl">Search in Dictionary</p>
        <p className="px-20">
          Get the word meaning, pronunciation, origin, synonyms, and more.
        </p>
      </div>
      <SearchBar />
      {words.length > 0 && (
        <Grid
          item
          container
          alignItems="center"
          justifyContent="space-evenly"
          sx={{ my: 5 }}
        >
          {words?.map((w, i) => (
            <Grid item key={i}>
              <WordCard key={i} word={w} />
            </Grid>
          ))}
        </Grid>
      )}
      {failedMessage && (
        <Grid item container direction="column" alignItems="center">
          <Alert severity="error" sx={{ my: "2em" }}>
            <AlertTitle>{failedMessage.title}</AlertTitle>
            {failedMessage.message}
            {failedMessage.resolution}
          </Alert>
        </Grid>
      )}
    </div>
  );
};
