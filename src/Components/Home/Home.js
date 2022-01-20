import React from 'react';
import './Home.css';
import ImageCard from '../ImageCard/ImageCard';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { TailSpin } from  'react-loader-spinner'

const Home = (props) => {

    const { loading, images } = props;

    return (
        <div className="home-container">
            {
                loading ?
                <div className="loadingContainer">
                    <h2>Loading...</h2>
                    <TailSpin color="#00BFFF" height={60} width={60} />
                </div>
                :
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