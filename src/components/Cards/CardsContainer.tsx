import React from "react";
import { WordAlert, WordData } from "../../types";
// components
import { WordCard } from "./WordCard";
// MUI
import { Grid, Alert, AlertTitle } from "@mui/material";

interface CardsContainerProps {
  words: WordData[] | WordAlert;
}

export const CardsContainer: React.FC<CardsContainerProps> = ({ words }) => {
  return (
    <Grid
      item
      container
      alignItems="center"
      justifyContent="space-evenly"
      sx={{ my: 5 }}
    >
      {Array.isArray(words) ? (
        words.map((w, i) => (
          <Grid item key={i}>
            <WordCard key={i} word={w} />
          </Grid>
        ))
      ) : (
        <Alert severity="error">
          <AlertTitle>{words.response.data.title}</AlertTitle>
          {words.response.data.message} <br />
          <strong>{words.response.data.resolution}</strong>
        </Alert>
      )}
    </Grid>
  );
};
