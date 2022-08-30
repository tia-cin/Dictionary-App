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
      <Grid item>
        <Grid item container>
          <Typography variant="h6">{title}</Typography>
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
      sx={{ backgroundColor: "#f4d19b", padding: "1em", my: "2em" }}
    >
      <Grid item container justifyContent="center">
        <Typography variant="h2">Meanings</Typography>
      </Grid>
      <Grid
        item
        container
        direction="row"
        justifyContent="space-around"
        sx={{ my: "2em" }}
      >
        {meanings &&
          meanings.map((m, i) => {
            return (
              <Grid
                item
                container
                rowSpacing={1}
                key={i}
                sx={{
                  my: ".5em",
                  mx: "2em",
                  borderColor: "#191919",
                  border: "1px solid",
                  borderRadius: "2em",
                  padding: "1em",
                }}
              >
                <Grid item container direction="column" xs={6}>
                  <Grid item container direction="row" alignItems="center">
                    <Typography variant="h6">Part of Speech</Typography>
                    <Typography
                      variant="body2"
                      sx={{ paddingTop: ".5em", paddingLeft: ".5em" }}
                    >
                      {m.partOfSpeech}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Grid item>
                      <Typography variant="h6">Definitions</Typography>
                    </Grid>
                    {m.definitions &&
                      m.definitions.map((d, i) => {
                        return (
                          <Grid item direction="column" key={i}>
                            <Typography variant="body2">
                              {d.definition}
                            </Typography>
                            <Typography variant="body2">
                              "{d.example ? d.example : "No Example"}"
                            </Typography>
                          </Grid>
                        );
                      })}
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  {addButtons(m.synonyms, "Synonyms")}
                  {addButtons(m.antonyms, "Antonyms")}
                </Grid>
              </Grid>
            );
          })}
      </Grid>
    </Grid>
  );
};
