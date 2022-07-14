import React from "react";
import { Link } from "react-router-dom";

export const Landing = () => {
    return (
        <div>
            <h1>Welcome to your</h1>
            <h1>Dictionary</h1>
            <Link to='/home'>
                <button>Go</button>
            </Link>
        </div>
    )
};