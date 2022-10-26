import React from "react";
import { Meanings } from "../types";
import { Grid, Typography } from "@mui/material";

interface WordMeaningProps {
  meanings: Meanings[];
}

export const WordMeaning: React.FC<WordMeaningProps> = ({ meanings }) => {
  const Buttons: React.FC<{ array: Array<any>; title: string }> = ({
    array,
    title,
  }) => {
    return (
      <Grid item>
        <Grid item container>
          <Titles title={title} />
        </Grid>
        <Grid item>
          {array.length ? (
            array.map((a, i) => (
              <Typography variant="overline" key={i} sx={{ mx: ".5em" }}>
                {a}
              </Typography>
            ))
          ) : (
            <Typography variant="overline" sx={{ mx: ".5em" }}>
              No {title} found
            </Typography>
          )}
        </Grid>
      </Grid>
    );
  };

  const Definitions: React.FC<{
    definition: string;
    example: string | undefined;
  }> = ({ definition, example }) => {
    const [text, setText] = React.useState<string>(
      definition.length <= 20 ? definition : definition.slice(0, 20)
    );
    const [readMore, setReadMore] = React.useState<boolean>(false);
    return (
      <div className="w-200">
        <p>{text}</p>
        <p>"{example ? example : "No Example"}"</p>
        <span
          className="font-semibold"
          onClick={() => {
            if (!readMore) {
              setText(definition);
              setReadMore(true);
            } else {
              setText(definition.slice(0, 20));
              setReadMore(false);
            }
          }}
        >
          {readMore ? " Show less" : " Read more"}
        </span>
      </div>
    );
  };

  const Titles: React.FC<{ title: string }> = ({ title }) => (
    <p className="font-medium text-lg">{title}</p>
  );

  return (
    <div>
      <h2 className="text-4xl font-semibold text-center my-2">Meanings</h2>
      <div className="grid grid-cols-2 items-center gap-3 h-full">
        {meanings &&
          meanings.map((m: Meanings, i: number) => {
            return (
              <div
                key={i}
                className="grid grid-cols-2 border rounded-3xl p-2 h-full my-2 mx-5 gap-3"
              >
                <div className="">
                  <Titles title="Part of Speech" />
                  <p>{m.partOfSpeech}</p>
                </div>
                <div className="">
                  <Titles title="Definitions" />
                  {m.definitions &&
                    m.definitions.map((d, i) => (
                      <Definitions
                        definition={d.definition}
                        example={d.example}
                        key={i}
                      />
                    ))}
                </div>
                <Buttons array={m.synonyms} title="Synonyms" />
                <Buttons array={m.antonyms} title="Antonyms" />
              </div>
            );
          })}
      </div>
    </div>
  );
};
