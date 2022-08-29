import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/HomePage/Home";
import { Landing } from "./components/Landing";
import { WordPage } from "./components/WordPage/WordPage";
// api -> https://api.dictionaryapi.dev/api/v2/entries/en

export const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/definitions/:wordId" element={<WordPage />} />
        <Route path="/about" element />
      </Routes>
    </div>
  );
};
