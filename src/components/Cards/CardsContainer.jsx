import React from "react";
import { Card } from "./Card";

export const CardsContainer = ({words}) => {
    return (
        <section>
            {
                words.word ? 
                    words.map((w, i) => {
                        return (
                            <Card key={i} word={w} />
                        )
                    })
                :
                    <div>
                        <h2>{words.title}</h2>
                        <h3>{words.message}</h3>
                        <p>{words.resolution}</p>
                    </div>
            }
        </section>
    )
};