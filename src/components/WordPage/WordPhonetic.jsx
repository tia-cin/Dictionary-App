import React from "react";
// styles
import { StyledMedium } from "../../styles/wordpage";

export const WordPhonetic = ({ phonetics }) => {
  return (
    <StyledMedium>
      <h2>Phonetics</h2>
      {phonetics &&
        phonetics.map((p) => {
          return (
            <section class="phonetics" key={Math.random()}>
              <div class="phonetic">
                <h5>{p.text}</h5>
                {p.audio && (
                  <div>
                    <audio src={p.audio} controls></audio>
                  </div>
                )}
              </div>
              {p.license && (
                <div className="license">
                  <h5>License:</h5>
                  <a href={p.license.url}>
                    <p>{p.license.name}</p>
                  </a>
                </div>
              )}
            </section>
          );
        })}
    </StyledMedium>
  );
};
