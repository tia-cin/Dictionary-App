import React from "react";

export const WordCredits = ({ license, sourceUrls }) => {
    return (
        <div>
            {
                license && sourceUrls ? 
                <div>
                    <h2>Credits</h2>
                    {
                        license &&
                        <div>
                            <h3>License:</h3>
                            <a href={license.url}><p>{license.name}</p></a>
                        </div>
                    }
                    {sourceUrls && 
                        <div>
                            <h3>Sourse URLs:</h3>
                            {sourceUrls && sourceUrls.map(u => <a href={u} key={u}>{u}</a>)}
                        </div>
                    }
                </div>
                : null
            }
        </div>
    )
};