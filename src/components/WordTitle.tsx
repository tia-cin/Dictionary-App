import React from "react";

interface WordTitleProps {
  title: string;
  phonetic?: string | Array<string>;
}

export const WordTitle: React.FC<WordTitleProps> = ({ title, phonetic }) => {
  return (
    <div className="flex items-end">
      <h1 className="uppercase font-semibold text-8xl">{title}</h1>
      {Array.isArray(phonetic) ? (
        phonetic.map((p) => (
          <p key={p} className="font-base text-lg italic">
            {p}
          </p>
        ))
      ) : (
        <p className="font-base text-lg italic">{phonetic}</p>
      )}
    </div>
  );
};
