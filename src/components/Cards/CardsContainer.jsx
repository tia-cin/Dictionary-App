import React from "react";
import { Card } from "./Card";

export const CardsContainer = ({ words }) => {
    return (
        <section>
            {/* {
                words.lenght? 
                    words.map(w => {
                        return (
                            <Card key={Math.random()} word={w}/>
                        )
                    })
                :
                <span>Loading...</span>
            } */}
            {console.log("cardscontainer",words)}
        </section>
    )
};