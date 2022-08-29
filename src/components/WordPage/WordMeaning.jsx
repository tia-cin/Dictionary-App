import React, { useState } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { getAntonyms, getSynonyms } from "../../redux/actions";
// components
import { Suggestions } from "../Cards/Suggestions";
// MUI
import { Modal } from "@mui/material";

export const WordMeaning = ({ meanings }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleOpen = () => setShow(true);

  const handleClose = () => setShow(false);

  const handleSynonyms = (value) => {
    dispatch(getSynonyms(value));
    setShow(!show);
  };

  const handleAntonyms = (value) => {
    dispatch(getAntonyms(value));
    setShow(!show);
  };

  return (
    <div>
      <h2>Meanings</h2>
      {meanings &&
        meanings.map((m) => {
          return (
            <div key={Math.random()} className="meanings">
              <h3>Part of Speech: "{m.partOfSpeech}"</h3>
              <div>
                {m.definitions &&
                  m.definitions.map((d) => {
                    return (
                      <div key={Math.random()} className="definitions">
                        {d.definition && (
                          <div className="definition">
                            <p>Definition</p>
                            <h6>{d.definition}</h6>
                          </div>
                        )}
                        {d.synonyms && (
                          <div className="synonyms">
                            {d.synonyms &&
                              d.synonyms.map((s) => (
                                <div
                                  key={s}
                                  onClick={(e) => {
                                    handleSynonyms(e.target.value);
                                    handleOpen();
                                  }}
                                  value={s}
                                  variant="contained"
                                >
                                  {s}
                                  <span className="synonym icon">S</span>
                                </div>
                              ))}
                          </div>
                        )}
                        {d.antonyms && (
                          <div className="antonyms">
                            {d.antonyms &&
                              d.antonyms.map((a) => (
                                <div
                                  key={a}
                                  onClick={(e) =>
                                    handleAntonyms(e.target.value)
                                  }
                                  value={a}
                                  variant="contained"
                                >
                                  {a}
                                  <span className="antonym icon">A</span>
                                </div>
                              ))}
                          </div>
                        )}
                        {d.example && (
                          <div className="examples">
                            <p>Examples</p>
                            <h6>{d.example}</h6>
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>
            </div>
          );
        })}
      <Modal open={show} onClose={handleClose}>
        <Suggestions />
      </Modal>
    </div>
  );
};
