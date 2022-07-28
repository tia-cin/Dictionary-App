import React from 'react';
import { useSelector } from 'react-redux';
// components
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { CardsContainer } from '../Cards/CardsContainer';

export const Home = () => {
    const { words } = useSelector(state => state);
    return (
        <div>
            <Navbar/>
            {console.log(words)}
            <CardsContainer words={words}/>
            <Footer/>
        </div>
    )
};