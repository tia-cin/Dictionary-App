import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { CardsContainer } from '../Cards/CardsContainer';

export const Home = ({ words }) => {
    return (
        <div>
            <Navbar/>
            {/* <CardsContainer/> */}
            {/* {console.log(words)} */}
            <Footer/>
        </div>
    )
};