import React from "react";
import { Phonetics } from "../../types";
// MUI
import { Typography, Grid } from "@mui/material";

interface WordPhoneticsProps {
  phonetics: Phonetics[];
}

export const WordPhonetic: React.FC<WordPhoneticsProps> = ({ phonetics }) => {
  return (
    <Grid item container>
      <Grid item container justifyContent="center">
        <Typography variant="h2">Phonetic</Typography>
      </Grid>
      <Grid item container justifyContent="space-around" sx={{ my: "2em" }}>
        {phonetics &&
          phonetics.map((p, i) => {
            return (
              <Grid
                item
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
                <div>
                  <Typography variant="subtitle1">{p.text}</Typography>
                  {p.audio && <audio src={p.audio} controls></audio>}
                </div>
                {p.license && (
                  <div>
                    <Typography variant="subtitle2">
                      License
                      <Typography variant="caption" sx={{ mx: ".5em" }}>
                        <a href={p.license.url}>{p.license.name}</a>
                      </Typography>
                    </Typography>
                  </div>
                )}
              </Grid>
            );
          })}
      </Grid>
    </Grid>
  );
};
