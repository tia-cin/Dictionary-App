import React from "react";
import { Card } from "./Card";

export const CardsContainer = ({ words }) => {
    return (
        <section>
            {console.log("cardscontainer",words)}
            {
                words.lenght? 
                    words.map(w => {
                        return (
                            <Card key={Math.random()} word={w}/>
                        )
                    })
                :
                <span></span>
            }
        </section>
    )
};