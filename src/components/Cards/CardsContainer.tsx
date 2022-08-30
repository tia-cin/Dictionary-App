import React from "react";
import { WordAlert, WordData } from "../../types";
// components
import { WordCard } from "./WordCard";

interface CardsContainerProps {
  words: WordData[] | WordAlert;
}

export const CardsContainer: React.FC<CardsContainerProps> = ({ words }) => {
  return (
    <div>
      {Array.isArray(words) ? (
        words.map((w, i) => {
          return <WordCard key={i} word={w} />;
        })
      ) : (
        <div>
          <div className="message">
            <div>{words.title}</div>
            <div>{words.message}</div>
            <p>{words.resolution}</p>
          </div>
        </div>
      )}
    </div>
  );
};
