import React from "react";
import { SearchBar } from "./SearchBar"

export const Navbar = () => {
    return (
        <nav>
            <div>
                <h1>Dictionary</h1>
            </div>
            <div>
                <SearchBar/>
            </div>
        </nav>
    )
};