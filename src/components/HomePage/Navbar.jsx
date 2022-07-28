import React from "react";
import { StyledNavbar } from "../../styles/containers";
import { SearchBar } from "./SearchBar"

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