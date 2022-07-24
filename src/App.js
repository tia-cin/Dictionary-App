import { Route, Routes } from 'react-router-dom';
import { Home } from './components/HomePage/Home';
import { Landing } from './components/Landing';
import React, { useState } from 'react';
import { WordPage } from './components/WordPage/WordPage';
import { useSelector } from 'react-redux';
// api -> https://api.dictionaryapi.dev/api/v2/entries/en

function App() {
  const { words } = useSelector(state => state);
  const [ failMessage, setFailMessage ] = useState({
    title: "",
    message: "",
    resolution: ""
  });

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home  words={words} failMessage={failMessage}/>} />
        <Route path='/definitions/:wordId' element={<WordPage words={words} />}/>
      </Routes>
    </div>
  );
};

export default App;
