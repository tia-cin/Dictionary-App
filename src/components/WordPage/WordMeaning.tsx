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
      <Grid item xs={8}>
        <Grid item container>
          <Typography>{title}</Typography>
        </Grid>
        <Grid item>
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
      sx={{ backgroundColor: "#f4d19b", padding: "1em" }}
    >
      <Grid item container justifyContent="center">
        <Typography variant="h2">Meanings</Typography>
      </Grid>
      <Grid
        item
        container
        direction="row"
        spacing={2}
        justifyContent="space-around"
      >
        {meanings &&
          meanings.map((m) => {
            return (
              <Grid
                container
                spacing={2}
                columns={16}
                key={Math.random()}
                sx={{
                  margin: ".5em",
                  borderColor: "#191919",
                  border: "1px solid",
                  borderRadius: "2em",
                  padding: "1em",
                }}
              >
                <Grid item direction="column" xs={8}>
                  <Typography variant="subtitle1">Part of Speech</Typography>
                  <Typography variant="subtitle2">{m.partOfSpeech}</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Grid item>
                    <Typography variant="subtitle1">Definitions</Typography>
                  </Grid>
                  {m.definitions &&
                    m.definitions.map((d) => {
                      return (
                        <Grid item direction="column" key={Math.random()}>
                          <Typography variant="subtitle2">
                            {d.definition}
                          </Typography>
                          <Typography variant="subtitle2">
                            "{d.example ? d.example : "No Example"}"
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
