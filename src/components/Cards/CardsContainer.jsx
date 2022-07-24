import React from "react";
import { Card } from "./Card";

export const CardsContainer = ({ words }) => {
    return (
        <section>
            {console.log("cardscontainer",words)}
            {
                words.lenght > 0 ? 
                    words.map((w) => {
                        return (
                            <Card key={w} word={w} />
                        )
                    })
                :
                <span>Loading...</span>
            }
        </section>
    )
};