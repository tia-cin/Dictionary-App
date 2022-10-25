import React from "react";
import { Grid, Typography } from "@mui/material";

interface WordTitleProps {
  title: string;
  phonetic?: string | Array<string>;
}

export const WordTitle: React.FC<WordTitleProps> = ({ title, phonetic }) => {
  return (
    <Grid item container alignItems="center" direction="column">
      <Typography variant="h1">{title}</Typography>
      {Array.isArray(phonetic) ? (
        phonetic.map((p) => (
          <Typography key={p} variant="h2">
            {p}
          </Typography>
        ))
      ) : (
        <Typography variant="h4">{phonetic}</Typography>
      )}
    </Grid>
  );
};
