import React from "react";
import { License } from "../types";

interface WordCreditsProps {
  license: License;
  sourceUrls: Array<string>;
}

export const WordCredits: React.FC<WordCreditsProps> = ({
  license,
  sourceUrls,
}) => {
  return (
    <div className="w-400">
      {license && sourceUrls && (
        <div className="flex justify-center">
          {license && (
            <div className="mx-3">
              <p className="text-lg font-semibold">License</p>
              <a href={license.url}>{license.name}</a>
            </div>
          )}
          {sourceUrls && (
            <div className="mx-3">
              <p className="text-lg font-semibold">Sourse URLs:</p>
              <ul className="flex flex-col">
                {sourceUrls &&
                  sourceUrls.map((u, i) => (
                    <li key={i}>
                      <a href={u} className="text-blue-300">
                        {u}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
