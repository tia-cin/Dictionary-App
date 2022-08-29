import React from "react";

export const WordTitle = ({ title, phonetic }) => {
  return (
    <div>
      <div>{title}</div>
      <div>{phonetic}</div>
    </div>
  );
};
