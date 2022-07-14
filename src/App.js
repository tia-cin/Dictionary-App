import './App.css';
import { Footer } from './components/footer';
import { Navbar } from './components/Navbar';

// api -> https://api.dictionaryapi.dev/api/v2/entries/en

function App() {

  return (
    <div className="App">
      <Navbar/>

      <Footer/>
    </div>
  );
}

export default App;
