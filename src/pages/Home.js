// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Quiz Platform</h1>
      <Link to="/create">Create a Quiz</Link>
      <br />
      <Link to="/quiz">Take a Sample Quiz</Link> 
    </div>
  );
};

export default Home;
