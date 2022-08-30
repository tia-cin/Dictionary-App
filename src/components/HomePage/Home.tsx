import React from "react";
import { useSelector } from "react-redux";
import logo from "../../assets/dictionary.png";
// components
import { SearchBar } from "./SearchBar";
import { CardsContainer } from "../Cards/CardsContainer";
import { RootReducer } from "../../redux/store";

export const Home: React.FC = () => {
  const { words } = useSelector((state: RootReducer) => state);

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
