import React from "react";
import { Meanings } from "../types";

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
      <div className="grid grid-cols-2">
        <Titles title={title} />
        <div className="grid grid-cols-3 gap-3 w-200">
          {array.length ? (
            array.map((a, i) => (
              <p key={i} className="text-md font-normal">
                {a}
              </p>
            ))
          ) : (
            <p className="text-md font-normal w-200">No {title} found</p>
          )}
        </div>
      </div>
    );
  };

  const Definitions: React.FC<{
    definition: Array<any>;
  }> = ({ definition }) => {
    return (
      <div className="w-200 h-full my-2">
        {definition.map((item, i) => (
          <div key={i}>
            <p className="text-md font-normal">{item.definition}</p>
            <span className="italic text-md font-light">
              "{item.example ? item.example : "No example"}"
            </span>
          </div>
        ))}
      </div>
    );
  };

  const Titles: React.FC<{ title: string }> = ({ title }) => (
    <p className="font-medium text-lg">{title}</p>
  );

  return (
    <div>
      <div>
        <div className="grid grid-cols-2">
          <Titles title="Part of Speech" />
          <div className="w-100 h-100">
            <p className="text-md font-normal">{section.partOfSpeech}</p>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <Titles title="Definitions" />
          {section.definitions && (
            <Definitions definition={section.definitions} />
          )}
        </div>
        <Buttons array={section.synonyms} title="Synonyms" />
        <Buttons array={section.antonyms} title="Antonyms" />
      </div>
      <div className="flex justify-evenly my-5 mb-8">
        {meanings &&
          meanings.map((p, i) => (
            <button
              key={i}
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
