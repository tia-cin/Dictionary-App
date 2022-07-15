import { Route, Routes } from 'react-router-dom';
import { Home } from './components/HomePage/Home';
import { Landing } from './components/Landing';
import React, { useEffect, useState } from 'react';
// api -> https://api.dictionaryapi.dev/api/v2/entries/en
const axios = require('axios');

function App() {
  const [ words, setWords ] = useState([]);
  const searchWords = async (input) => {
    const req = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`);
    let words = await req.data;
    // if(res) {
      // let total = res.map(r => {
      //   return {
      //     title: r.title ? r.title : null,
      //     message: r.message ? r.message : null,
      //     resolution: r.resolution ? r.resolution : null,
      //     word: r.word,
      //     phonetic: r.phonetic ? r.phonetic : null,
      //     phonetics: r.phonetics ? r.phonetics : null,
      //     origin: r.origin ? r.origin : null,
      //     meanings: r.meanings ? r.meanings : null,
      //     license: r.license ? r.license : null,
      //     sourceUrls: r.sourceUrls ? r.sourceUrls : null
      //   }
      // });
    //   setWords(res);
    //   console.log(words)
    // } else {
    //   return <span>No Words Found</span>
    // }
  };
  
  useEffect(() => {
    searchWords("a")
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>} words={words}/>
        <Route path='/home/:word' />
      </Routes>
    </div>
  );
};

export default App;
