import React from "react";
import { Card } from "./Card";

export const CardsContainer = ({words}) => {
    return (
        <section>
            {console.log("cardscontainer",words)}
            {
                words && 
                    words.map((w, i) => {
                        return (
                            <Card key={i} word={w} />
                        )
                    })
                
            }
        </section>
    )
};