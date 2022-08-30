import React from "react";
import { WordAlert, WordData } from "../../types";
// components
import { WordCard } from "./WordCard";
// MUI
import { Grid } from "@mui/material";

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
          <Grid item>
            <WordCard key={i} word={w} />
          </Grid>
        ))
      ) : (
        <div>
          <div className="message">
            <div>{words.title}</div>
            <div>{words.message}</div>
            <p>{words.resolution}</p>
          </div>
        </div>
      )}
    </Grid>
  );
};
