import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ word }) => {
    return (
        <div>
            <Link>
                <h4>
                    {word.title}
                </h4>
                <h3>{word.phonetic ? word.phonetic : null}</h3>
            </Link>
        </div>
    )
};