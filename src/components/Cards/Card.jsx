import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ word }) => {
    return (
        <div>
            <Link to={`/home/${word.word}`}>
                <h3>
                    {word.word}
                </h3>
                <h4>{word.phonetic ? word.phonetic : null}</h4>
            </Link>
        </div>
    )
};