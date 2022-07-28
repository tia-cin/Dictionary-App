import React from "react";
// styles
import { StyledMedium } from "../../styles/wordpage";

export const WordCredits = ({ license, sourceUrls }) => {
  return (
    <StyledMedium>
      {license && sourceUrls && (
        <div className="credits">
          <h2>Credits</h2>
          {license && (
            <div>
              <h3>License:</h3>
              <a href={license.url}>
                <p>{license.name}</p>
              </a>
            </div>
          )}
          {sourceUrls && (
            <div className="credits">
              <h3>Sourse URLs:</h3>
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
    </StyledMedium>
  );
};
