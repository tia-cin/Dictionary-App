import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { CardsContainer } from '../Cards/CardsContainer';

export const Home = ({ words, searchWords, failMessage }) => {
    return (
        <div>
            <Navbar searchWords={searchWords}/>
            {
                failMessage &&
                    <div>
                        <h2>{failMessage.title}</h2>
                        <h3>{failMessage.message}</h3>
                        <p>{failMessage.resolution}</p>
                    </div>
            }
            {
                words &&
                    <CardsContainer words={words}/>
            }
            <Footer/>
        </div>
    )
};