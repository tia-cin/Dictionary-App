import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { CardsContainer } from '../Cards/CardsContainer';

export const Home = ({ words, searchWords, failMessage }) => {
    return (
        <div>
            <Navbar searchWords={searchWords}/>
            {console.log("home res", words)}
            {
                failMessage ? 
                    <div>
                        <h2>{failMessage.title}</h2>
                        <h3>{failMessage.message}</h3>
                        <p>{failMessage.resolution}</p>
                    </div>
                : 
                    <CardsContainer/>
            }
            <Footer/>
        </div>
    )
};