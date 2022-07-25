import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { CardsContainer } from '../Cards/CardsContainer';
import React from 'react';
import { useSelector } from 'react-redux';

export const Home = () => {
    const { words } = useSelector(state => state);
    const { failedMessage } = useSelector(state => state);
    return (
        <div>
            <Navbar/>
            {
                failedMessage &&
                    <div>
                        <h2>{failedMessage.title}</h2>
                        <h3>{failedMessage.message}</h3>
                        <p>{failedMessage.resolution}</p>
                    </div>
            }
            {words.lenght && <CardsContainer words={words}/>}
            <Footer/>
        </div>
    )
};