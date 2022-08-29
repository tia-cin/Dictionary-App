import React from "react";
import { Link } from "react-router-dom";

import { WordData } from "../../types";

interface CardProps {
  word: WordData;
}

export const Card: React.FC<CardProps> = ({ word }) => {
  return (
    <div>
      <Link to={`/definitions/${word.id}`}>
        <h3>{word.word}</h3>
        <h4>{word.phonetic ? word.phonetic : null}</h4>
      </Link>
    </div>
  );
};
