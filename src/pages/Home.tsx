import React from "react";
import { useSelector } from "react-redux";
import { SearchBar, WordCard } from "../components";
import { RootReducer } from "../redux/store";
import { Grid, Alert, AlertTitle } from "@mui/material";

export const Home: React.FC = () => {
  const { words, failedMessage } = useSelector((state: RootReducer) => state);

  return (
    <div className="h-screen pt-20">
      <div className="text-center">
        <p className="font-semibold text-2xl">Search in Dictionary</p>
        <p className="px-20">
          Get the word meaning, pronunciation, origin, synonyms, and more.
        </p>
      </div>
      <SearchBar />
      <div className="flex items-center justify-center">
        {words.length > 0 && (
          <div className="flex md:flex-col justify-around">
            {words?.map((w, i) => (
              <WordCard key={i} word={w} />
            ))}
          </div>
        )}
        {failedMessage && (
          <div className="w-400 ">
            <Alert severity="error" sx={{ my: "2em" }}>
              <AlertTitle>{failedMessage.title}</AlertTitle>
              <p className="text-base">{failedMessage.message}</p>
              <span className="text-base font-medium">Recomendation: </span>
              <span className="text-base">{failedMessage.resolution}</span>
            </Alert>
          </div>
        )}
      </div>
    </div>
  );
};
