import { Grid } from "@mui/material";
import React from "react";
import { Phonetics } from "../../types";

interface WordPhoneticsProps {
  phonetics: Phonetics[];
}

export const WordPhonetic: React.FC<WordPhoneticsProps> = ({ phonetics }) => {
  return (
    <Grid item container>
      <h2>Phonetics</h2>
      {phonetics &&
        phonetics.map((p) => {
          return (
            <section className="phonetics" key={Math.random()}>
              <div className="phonetic">
                <h5>{p.text}</h5>
                {p.audio && (
                  <div>
                    <audio src={p.audio} controls></audio>
                  </div>
                )}
              </div>
              {p.license && (
                <div className="license">
                  <h5>License:</h5>
                  <a href={p.license.url}>
                    <p>{p.license.name}</p>
                  </a>
                </div>
              )}
            </section>
          );
        })}
    </Grid>
  );
};
