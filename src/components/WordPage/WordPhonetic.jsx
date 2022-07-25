import React from "react";

export const WordPhonetic = ({ phonetics }) => {
  return (
    <div>
      {phonetics && <h2>Phonetics</h2> &&
        phonetics.map((p) => {
          return (
            <section key={Math.random()}>
              <h5>{p.text}</h5>
              {p.audio && (
                <div>
                  <audio src={p.audio} controls></audio>
                </div>
              )}
              {p.license && (
                <div>
                  <h5>License:</h5>
                  <a href={p.license.url}>
                    <p>{p.license.name}</p>
                  </a>
                </div>
              )}
            </section>
          );
        })}
    </div>
  );
};
