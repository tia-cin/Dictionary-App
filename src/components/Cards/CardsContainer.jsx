import React from "react";
import { Card } from "./Card";
import { useSelector } from 'react-redux';

export const CardsContainer = () => {
    const { words } = useSelector(state=> state);
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