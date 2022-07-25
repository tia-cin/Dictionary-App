import React from "react";
import { Link } from "react-router-dom";

export const Landing = () => {
    return (
        <div>
            <div>
                <h1>Welcome to your</h1>
                <h1>Dictionary</h1>
            </div>
            <div>
                <p>Search any word and find it's definitions, pronunsiations and more</p>
            </div>
            <Link to='/home'>
                <button>Get Started</button>
            </Link>
        </div>
    )
};