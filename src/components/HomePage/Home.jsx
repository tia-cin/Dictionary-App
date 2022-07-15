import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { CardsContainer } from '../Cards/CardsContainer';

export const Home = () => {
    return (
        <div>
            <Navbar/>
            <CardsContainer/>
            <Footer/>
        </div>
    )
};