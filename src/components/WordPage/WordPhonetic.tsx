import { Grid } from "@mui/material";
import React from "react";
import { Phonetics } from "../../types";
// MUI
import { Typography } from "@mui/material";

interface WordPhoneticsProps {
  phonetics: Phonetics[];
}

export const WordPhonetic: React.FC<WordPhoneticsProps> = ({ phonetics }) => {
  return (
    <Grid item container>
      <Grid item container justifyContent="center">
        <Typography variant="h2">Phonetic</Typography>
      </Grid>
      <Grid item container justifyContent="space-around">
        {phonetics &&
          phonetics.map((p, i) => {
            return (
              <Grid item key={i}>
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
