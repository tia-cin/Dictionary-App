import React from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Landing } from "./pages/Landing";
import { Navbar } from "./components/Navbar";
import { WordPage } from "./pages/WordPage";
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
