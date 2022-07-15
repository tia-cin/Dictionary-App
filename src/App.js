import { Route, Routes } from 'react-router-dom';
import { Home } from './components/HomePage/Home';
import { Landing } from './components/Landing';
// api -> https://api.dictionaryapi.dev/api/v2/entries/en

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/home/:word' />
      </Routes>
    </div>
  );
}

export default App;
