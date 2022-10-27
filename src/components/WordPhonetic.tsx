import React from "react";
import { Phonetics } from "../types";

interface WordPhoneticsProps {
  phonetics: Phonetics[];
}

export const WordPhonetic: React.FC<WordPhoneticsProps> = ({ phonetics }) => {
  return (
    <div className="w-400">
      <div className="flex flex-col items-center">
        {phonetics &&
          phonetics.map((p, i) => {
            return (
              <div className="flex items-end justify-around my-3" key={i}>
                <div>
                  <p className="text-lg font-semibold">{p.text}</p>
                  {p.audio && <audio src={p.audio} controls></audio>}
                </div>
                {p.license && (
                  <div className="ml-5 mb-2">
                    <p className="text-md font-semibold">License</p>
                    <a href={p.license.url}>{p.license.name}</a>
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};
