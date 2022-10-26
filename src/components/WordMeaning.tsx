import React from "react";
import { Meanings } from "../types";
import { Grid, Typography } from "@mui/material";

interface WordMeaningProps {
  meanings: Meanings[];
}

export const WordMeaning: React.FC<WordMeaningProps> = ({ meanings }) => {
  const [section, setSection] = React.useState<any>(meanings[0]);
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
      <div className="">
        <div className="">
          <div className="">
            <Titles title="Part of Speech" />
            <p>{section.partOfSpeech}</p>
          </div>
          <div className="">
            <Titles title="Definitions" />
            {section.definitions &&
              section.definitions.map((d: any, i: number) => (
                <Definitions
                  definition={d.definition}
                  example={d.example}
                  key={i}
                />
              ))}
          </div>
          <Buttons array={section.synonyms} title="Synonyms" />
          <Buttons array={section.antonyms} title="Antonyms" />
        </div>
      </div>
      <div className="flex justify-evenly my-5 mb-8">
        {meanings &&
          meanings.map((p, i) => (
            <button onClick={() => setSection(p)}>{i}</button>
          ))}
      </div>
    </div>
  );
};
