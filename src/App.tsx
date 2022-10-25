import React from "react";
import { Route, Routes } from "react-router-dom";
import { About, Home, Landing, WordPage } from "./pages";
import { Navbar } from "./components/Navbar";
// import { Status } from "./components/Status";
// api -> https://api.dictionaryapi.dev/api/v2/entries/en

export const App: React.FC = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <Routes>
        {/* <Route path="/" element={<Status />} /> */}
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/definitions/:wordId" element={<WordPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};
