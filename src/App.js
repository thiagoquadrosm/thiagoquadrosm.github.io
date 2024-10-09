import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Sobre from "./pages/Sobre"
import Header from "./components/Header"
import Cv from "./pages/Cv"
import MainGrid from './components/MainGrid';
import Project from "./pages/Project"

function App() {
  return (
    <Router>
      <Header />
      <main className='conteudo'>
        <Routes>
          <Route path="/">
            <Route index element={<MainGrid />} />
            <Route exact path="sobre" element={<Sobre/>} />
            <Route exact path="cv" element={<Cv/>} />
            <Route exact path=':url' element={<Project />}/>  
          </Route>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
