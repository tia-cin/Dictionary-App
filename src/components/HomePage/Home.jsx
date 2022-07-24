import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { CardsContainer } from '../Cards/CardsContainer';
import React from 'react';

export const Home = () => {
   
    return (
        <div>
            <Navbar/>
            {/* {
                failMessage &&
                    <div>
                        <h2>{failMessage.title}</h2>
                        <h3>{failMessage.message}</h3>
                        <p>{failMessage.resolution}</p>
                    </div>
            } */}
            <CardsContainer/>
            <Footer/>
        </div>
    )
};