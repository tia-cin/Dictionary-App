import React from "react";
// components
import { SearchBar } from "./SearchBar"
// styles
import { StyledNavbar } from "../../styles/containers";

export const Navbar = () => {
    return (
        <StyledNavbar>
            <div>
                <h1>Dictionary</h1>
            </div>
            <div>
                <SearchBar/>
            </div>
        </StyledNavbar>
    )
};