import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Home from './Components/Home/Home';
import Navigation from './Components/Navigation/Navigation';

const App = () => {

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=dr2NFZTYBrLLNuElDHFsKQOL8tCi1KcaZGe5OnkQ&count=40`)
    .then(response => {
        console.log(response.data);
        setImages(response.data);
        setLoading(false);
    })
    .catch(err => {
        console.log(err);
    })
  }, [])


  return (
    <div>
      <Navigation />
      <Home loading={loading} images={images} />
    </div>
  );
}

export default App;