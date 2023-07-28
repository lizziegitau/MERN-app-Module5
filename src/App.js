import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Journal from './components/Journal';
import Meditation from './components/Meditation';
import Login from './components/Login'
import Profile from './components/Profile'
import Affirmations from './components/Affirmations';
import Hotline from './components/Hotline'
import './App.css'

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/account" element={<Login/>} />
          <Route exact path="/profile" element={<Profile/>} />
          <Route path="/journal" element={<Journal/>} />
          <Route path="/meditation" element={<Meditation/>} />
          <Route path="/affirmation" element={<Affirmations/>} />
          <Route path="/hotline" element={<Hotline/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;