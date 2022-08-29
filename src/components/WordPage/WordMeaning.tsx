import React, { useState } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { getAntonyms, getSynonyms } from "../../redux/actions";
// components
import { Suggestions } from "../Cards/Suggestions";
// MUI
import { Modal } from "@mui/material";
import { Meanings } from "../../types";

interface WordMeaningProps {
  meanings: Meanings[];
}

export const WordMeaning: React.FC<WordMeaningProps> = ({ meanings }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleOpen = (): void => setShow(true);

  const handleClose = (): void => setShow(false);

  const handleSynonyms = (value: string): void => {
    dispatch<any>(getSynonyms(value));
    setShow(!show);
  };

  const handleAntonyms = (value: string): void => {
    dispatch<any>(getAntonyms(value));
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
                              d.synonyms.map((s: string, i: number) => (
                                <button
                                  key={i}
                                  onClick={(e: any) => {
                                    handleSynonyms(e.target.value);
                                    handleOpen();
                                  }}
                                  value={s}
                                >
                                  {s}
                                  <span className="synonym icon">S</span>
                                </button>
                              ))}
                          </div>
                        )}
                        {d.antonyms && (
                          <div className="antonyms">
                            {d.antonyms &&
                              d.antonyms.map((a: string, i: number) => (
                                <button
                                  key={i}
                                  onClick={(e: any) => {
                                    handleAntonyms(e.target.value);
                                    handleOpen();
                                  }}
                                  value={a}
                                >
                                  {a}
                                  <span className="antonym icon">A</span>
                                </button>
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
