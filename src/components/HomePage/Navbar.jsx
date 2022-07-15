import React from "react";
import { SearchBar } from "./SearchBar"

export const Navbar = ({ searchWords }) => {
    return (
        <nav>
            <div>
                <h1>Dictionary</h1>
            </div>
            <div>
                <SearchBar searchWords={searchWords}/>
            </div>
        </nav>
    )
};