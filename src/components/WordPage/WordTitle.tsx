import React from "react";

interface WordTitleProps {
  title: string;
  phonetic?: string | Array<string>;
}

export const WordTitle: React.FC<WordTitleProps> = ({ title, phonetic }) => {
  return (
    <div>
      <div>{title}</div>
      <div>
        {Array.isArray(phonetic) ? (
          phonetic.map((p) => <div key={p}>{p}</div>)
        ) : (
          <div>{phonetic}</div>
        )}
      </div>
    </div>
  );
};
