import React from "react";
// components
import { Card } from "./Card";

export const CardsContainer = ({ words }) => {
  return (
    <div>
      {Array.isArray(words) ? (
        words.map((w, i) => {
          return <Card key={i} word={w} />;
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
