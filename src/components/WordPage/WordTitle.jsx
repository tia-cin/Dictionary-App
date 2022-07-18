import React from "react";

export const WordTitle = ({ title, phonetic }) => {
    return (
        <div>
            <h1>{title}</h1>
            <h2>{phonetic}</h2>
        </div>
    )
};