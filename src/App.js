import { Route, Routes } from 'react-router-dom';
import { Home } from './components/HomePage/Home';
import { Landing } from './components/Landing';
import React, { useState } from 'react';
import { WordPage } from './components/WordPage/WordPage';
// api -> https://api.dictionaryapi.dev/api/v2/entries/en
const axios = require('axios');

function App() {
  const [ words, setWords ] = useState([]);
  const [ failMessage, setFailMessage ] = useState({
    title: "",
    message: "",
    resolution: ""
  });

  const searchWords = async (input) => {
    try {
      const req = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`);
      let res = await req.data && req.data.map(r => {
        return {
              word: r.word,
              phonetic: r.phonetic ? r.phonetic : null,
              phonetics: r.phonetics ? r.phonetics : null,
              origin: r.origin ? r.origin : null,
              meanings: r.meanings ? r.meanings : null,
              license: r.license ? r.license : null,
              sourceUrls: r.sourceUrls ? r.sourceUrls : null
            };
      });
      res ? setWords(res) : console.log("failed seting words");
      console.log("app",res)
    } catch (e) {
      setFailMessage({
        title: e.response.data.title,
        message: e.response.data.message,
        resolution: e.response.data.resolution
      })
    }
  };

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home searchWords={searchWords} words={words} failMessage={failMessage}/>} />
        <Route path='/home/:word' element={<WordPage/>}/>
      </Routes>
    </div>
  );
};

export default App;
