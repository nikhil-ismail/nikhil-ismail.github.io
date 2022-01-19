import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Navigation from './Components/Navigation/Navigation';

const App = () => {
  return (
    <div>
      <Navigation />
      <Home />
    </div>
  );
}

export default App;