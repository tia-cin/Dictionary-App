import React from "react";
import { Link } from "react-router-dom";

export const Landing = () => {
    return (
        <div>
                <div>
                    <div>
                        <h2 >Search any word and find</h2>
                    </div>
                    <div>
                        <h2 >their definition in our</h2> 
                        <h2 >Dictionary</h2>
                    </div>
                </div>
                <div>
                    <h2 >Search any word and find it's definitions, pronunsiations and more</h2>
                </div>
                <Link to='/home'>
                    <button >
                      Get Started
                    </button>
                </Link>
        </div>
    )
};