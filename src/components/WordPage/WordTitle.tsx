import React from "react";

interface WordTitleProps {
  title: string;
  phonetic?: string;
}

export const WordTitle: React.FC<WordTitleProps> = ({ title, phonetic }) => {
  return (
    <div>
      <div>{title}</div>
      <div>{phonetic}</div>
    </div>
  );
};
