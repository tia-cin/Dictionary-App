import React from "react";

export const WordCredits = ({ license, sourceUrls }) => {
    return (
        <div>
            <h2>Credits</h2>
            <div>
                <h3>License:</h3>
                <a href={license.url}><p>{license.name}</p></a>
            </div>
            <div>
                <h3>Sourse URLs:</h3>
                {sourceUrls && sourceUrls.map(u => <a href={u}>{u}</a>)}
            </div>
        </div>
    )
};