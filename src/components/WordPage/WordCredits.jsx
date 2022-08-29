import React from "react";

export const WordCredits = ({ license, sourceUrls }) => {
  return (
    <div>
      <h2>Credits</h2>
      {license && sourceUrls && (
        <div className="credits">
          {license && (
            <div>
              <h5>License:</h5>
              <a href={license.url}>
                <p>{license.name}</p>
              </a>
            </div>
          )}
          {sourceUrls && (
            <div className="credits">
              <h5>Sourse URLs:</h5>
              {sourceUrls &&
                sourceUrls.map((u) => (
                  <a href={u} key={u}>
                    {u}
                  </a>
                ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
