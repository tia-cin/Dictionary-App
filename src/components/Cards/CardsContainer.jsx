import React from "react";
import { Card } from "./Card";

export const CardsContainer = ({ words }) => {
    return (
        <section>
            {console.log("cardscontainer",words)}
            {
                words ? 
                    words.map((w) => {
                        return (
                            <Card key={w.id} word={w} />
                        )
                    })
                :
                <span></span>
            }
        </section>
    )
};