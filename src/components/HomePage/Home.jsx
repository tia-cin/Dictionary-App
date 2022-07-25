import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { CardsContainer } from '../Cards/CardsContainer';
import React from 'react';
import { useSelector } from 'react-redux';

export const Home = () => {
    const { words } = useSelector(state=> state);
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
            <CardsContainer words={words}/>
            <Footer/>
        </div>
    )
};