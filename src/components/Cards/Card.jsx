import React from "react";

export const Card = ({ word }) => {
    return (
        <div>
            <h4>
                {word.title}
            </h4>
            <h3>{word.phonetic? word.phonetic:null}</h3>
        </div>
    )
};