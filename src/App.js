import { Route, Routes } from 'react-router-dom';
import { Home } from './components/HomePage/Home';
import { Landing } from './components/Landing';
import React from 'react';
import { WordPage } from './components/WordPage/WordPage';
// api -> https://api.dictionaryapi.dev/api/v2/entries/en

function App() {

  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/home' element={<Home/>} />
          <Route path='/definitions/:wordId' element={<WordPage />}/>
        </Routes>
    </div>
  );
};

export default App;
