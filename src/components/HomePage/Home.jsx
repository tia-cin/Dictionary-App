import React from "react";
import { useSelector } from "react-redux";
import logo from "../../assets/dictionary.png";
// components
import { SearchBar } from "./SearchBar";
import { CardsContainer } from "../Cards/CardsContainer";

export const Home = () => {
  const { words } = useSelector((state) => state);
  return (
    <div>
      <div>
        <img src={logo} alt="dictionary-logo" width="100" />
      </div>
      <SearchBar />
      <CardsContainer words={words} />
    </div>
  );
};
