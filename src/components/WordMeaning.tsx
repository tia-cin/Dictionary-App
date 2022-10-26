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
      <div>
        <Titles title={title} />
        <div className="grid grid-cols-3 gap-3">
          {array.length ? (
            array.map((a, i) => (
              <p key={i} className="">
                {a}
              </p>
            ))
          ) : (
            <p>No {title} found</p>
          )}
        </div>
      </div>
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
      <div className="w-400">
        <p>
          {text}
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
        </p>
        <p>"{example ? example : "No Example"}"</p>
      </div>
    );
  };

  const Titles: React.FC<{ title: string }> = ({ title }) => (
    <p className="font-medium text-lg">{title}</p>
  );

  return (
    <div>
      <div className="flex">
        <div>
          <Titles title="Part of Speech" />
          <p>{section.partOfSpeech}</p>
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
        <div>
          <Buttons array={section.synonyms} title="Synonyms" />
          <Buttons array={section.antonyms} title="Antonyms" />
        </div>
      </div>
      <div className="flex justify-evenly my-5 mb-8">
        {meanings &&
          meanings.map((p, i) => (
            <button
              onClick={() => setSection(p)}
              className={`text-2xl px-3 py-1 rounded-full ${
                section === p
                  ? "bg-blue-300 text-white"
                  : "text-blue-300 bg-white"
              }`}
            >
              {i}
            </button>
          ))}
      </div>
    </div>
  );
};
