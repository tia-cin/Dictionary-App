import React from "react";
// MUI
import { Button, Grid, Typography } from "@mui/material";
import { Meanings } from "../../types";

interface WordMeaningProps {
  meanings: Meanings[];
}

export const WordMeaning: React.FC<WordMeaningProps> = ({ meanings }) => {
  const addButtons = (array: Array<any>, title: string) => {
    return (
      <Grid item container>
        <Grid item container>
          <Typography>{title}</Typography>
        </Grid>
        <Grid item container>
          {array.map((a) => (
            <Button variant="outlined">{a}</Button>
          ))}
        </Grid>
      </Grid>
    );
  };

  return (
    <Grid
      item
      container
      direction="column"
      alignItems="center"
      sx={{ backgroundColor: "#f4d19b" }}
    >
      <Grid item container justifyContent="center">
        <Typography variant="h2">Meanings</Typography>
      </Grid>
      <Grid item container justifyContent="center">
        {meanings &&
          meanings.map((m) => {
            return (
              <Grid item container key={Math.random()}>
                <Grid item container>
                  <Typography variant="subtitle1">
                    Part of Speech
                    <Typography variant="subtitle2">
                      {m.partOfSpeech}
                    </Typography>
                  </Typography>
                </Grid>
                <Grid item container>
                  <Grid item container>
                    <Typography variant="subtitle1">Definitions</Typography>
                  </Grid>
                  {m.definitions &&
                    m.definitions.map((d) => {
                      return (
                        <Grid item container key={Math.random()}>
                          <Typography variant="subtitle2">
                            {d.definition}
                          </Typography>
                          <Typography variant="subtitle2">
                            "{d.example}"
                          </Typography>
                        </Grid>
                      );
                    })}
                </Grid>
                {addButtons(m.synonyms, "Synonyms")}
                {addButtons(m.antonyms, "Antonyms")}
              </Grid>
            );
          })}
      </Grid>
    </Grid>
  );
};
