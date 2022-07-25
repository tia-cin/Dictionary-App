import React from "react";
import { Card } from "./Card";

export const CardsContainer = ({words}) => {
    return (
        <section>
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