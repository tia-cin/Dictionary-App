import React from "react";
import { WordAlert, WordData } from "../types";
import { WordCard } from ".";
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
        <Grid item container direction="column" alignItems="center">
          <Alert severity="error" sx={{ my: "2em" }}>
            <AlertTitle>{words.response.data.title}</AlertTitle>
            {words.response.data.message}
          </Alert>
          <Alert severity="info">{words.response.data.resolution}</Alert>
        </Grid>
      )}
    </Grid>
  );
};
