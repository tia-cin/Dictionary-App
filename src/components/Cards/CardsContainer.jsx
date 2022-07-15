import React from "react";
import { Card } from "./Card";

export const CardsContainer = ({ words }) => {
    return (
        <section>
            {
                words.lenght? 
                    words.map(w => {
                        return (
                            <Card key={w} word={w.word}/>
                        )
                    })
                :
                <span>Loading...</span>
            }
        </section>
    )
};