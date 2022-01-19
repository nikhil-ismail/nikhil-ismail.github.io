import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';
import ImageCard from '../ImageCard/ImageCard';

const Home = () => {
    
    const [images, setImages] = useState([]);

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=dr2NFZTYBrLLNuElDHFsKQOL8tCi1KcaZGe5OnkQ&count=20`)
        .then(response => {
            console.log(response.data);
            setImages(response.data);
        })
        .catch(err => {
            console.log(err);
        })
      }, [])

    return (
        <div className="home-container">
            {
                images.map((image, index) => {
                    return (
                        <ImageCard key={index} image={image} />
                    );
                })
            }
        </div>
    );
}

export default Home;