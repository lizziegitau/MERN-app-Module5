import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <div className="home-container">
      <nav className="navbar-home">
        <h1>SERENITY SPACE</h1>
        <img src="img/app.png" alt="Serenity Space" />
      </nav>
      <div className="main-content">
        <p>WELCOME TO YOUR SAFE SPACE</p>
        <img src="img/home.jpg" alt="Home" />
        <div>
          <Link to="/account">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
