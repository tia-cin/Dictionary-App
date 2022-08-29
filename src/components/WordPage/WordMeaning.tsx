import React from "react";
// MUI
import { Grid, Typography } from "@mui/material";
import { Meanings } from "../../types";

interface WordMeaningProps {
  meanings: Meanings[];
}

export const WordMeaning: React.FC<WordMeaningProps> = ({ meanings }) => {
  const addButtons = (array: Array<any>, letter: string) => {
    return array.map((a) => (
      <button>
        {a}
        <span className="synonym icon">{letter}</span>
      </button>
    ));
  };

  const addSection = (title: string, value: string) => {
    return (
      <section>
        <p>{title}</p>
        <h6>{value}</h6>
      </section>
    );
  };

  return (
    <Grid item container>
      <Grid item>
        <Typography variant="h2">Meanings</Typography>
      </Grid>
      {meanings &&
        meanings.map((m) => {
          return (
            <div key={Math.random()} className="meanings">
              {addSection("Part of Speech", m.partOfSpeech)}
              <div>
                {m.definitions &&
                  m.definitions.map((d) => {
                    return (
                      <div key={Math.random()} className="definitions">
                        {d.definition && addSection("Definition", d.definition)}
                        {d.synonyms && addButtons(d.synonyms, "S")}
                        {d.antonyms && addButtons(d.antonyms, "A")}
                        {d.example && addSection("Example", d.example)}
                      </div>
                    );
                  })}
              </div>
              {addButtons(m.synonyms, "S")}
              {addButtons(m.antonyms, "A")}
            </div>
          );
        })}
    </Grid>
  );
};
