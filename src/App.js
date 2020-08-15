import React from 'react';
import logo from './logo.svg';
import HeaderWithImg from './Components/HeaderWithImg'
import NamePost from './Components/NamePost'
import Contact from './Components/Contact'
import Accounts from './Components/Accounts'
import AboutMe from './Components/AboutMe'
import TechStack from './Components/TechStack'
import Proficiencies from './Components/Proficiencies'
import Experience from './Components/Experience'
import Projects from './Components/Projects'
import './App.css';

function App() {
  return (
    <div>
    <HeaderWithImg />
    <NamePost />
    <Contact />
    <Accounts />
    <AboutMe />
    <TechStack />
    <Proficiencies />
    <Experience />
    <Projects />
    </div>
  );
}

export default App;
