import React from "react";

export const WordCredits = ({ license, sourceUrl }) => {
    return (
        <div>
            <div>
                {license}
            </div>
            <div>
                {sourceUrl}
            </div>
        </div>
    )
};