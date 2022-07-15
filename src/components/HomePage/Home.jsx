import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { CardsContainer } from '../Cards/CardsContainer';

export const Home = ({ words, searchWords }) => {
    return (
        <div>
            <Navbar searchWords={searchWords}/>
            {/* <CardsContainer/> */}
            {console.log(words)}
            <Footer/>
        </div>
    )
};