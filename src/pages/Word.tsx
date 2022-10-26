import React, { useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
import { useParams } from "react-router-dom";
import { getDetail } from "../redux/actions";
import { useSelector } from "react-redux/es/hooks/useSelector";
import {
  WordCredits,
  WordMeaning,
  WordPhonetic,
  WordTitle,
} from "../components";
import { RootReducer } from "../redux/store";

export const WordPage: React.FC = () => {
  const [toggle, setToggle] = React.useState<string>("meanings");
  const dispatch = useDispatch();
  const { wordId } = useParams();
  const { detail } = useSelector((state: RootReducer) => state);

  useEffect(() => {
    dispatch<any>(getDetail(Number(wordId)));
  }, [dispatch, wordId]);

  return (
    <div className="h-screen pt-20">
      {detail && (
        <div className="flex flex-col items-center justify-center">
          <WordTitle title={detail[0].word} phonetic={detail[0].phonetic} />
          <div>
            <div className="flex justify-around">
              <button onClick={() => setToggle("meanings")}>meaning</button>
              <button onClick={() => setToggle("phonetic")}>phonetic</button>
              <button onClick={() => setToggle("credits")}>credits</button>
            </div>
            {toggle === "meanings" && (
              <WordMeaning meanings={detail[0].meanings} />
            )}
            {toggle === "phonetic" && (
              <WordPhonetic phonetics={detail[0].phonetics} />
            )}
            {toggle === "credits" && (
              <WordCredits
                license={detail[0].license}
                sourceUrls={detail[0].sourceUrls}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};
