import React, { useState } from 'react';
import './ImageCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as farHear } from '@fortawesome/free-regular-svg-icons'

const ImageCard = (props) => {

    const [like, setLike] = useState(false);

    const toggleLike = () => {
        setLike(!like);
    }

    return (
        <div className="card-container">
            <img className="card-img" onDoubleClick={toggleLike} src={props.image.hdurl} alt="Astronomy Picture of the Day" />
            <div className="card-caption">
                {
                    like ?
                    <FontAwesomeIcon icon={faHeart} color="red" onClick={toggleLike} size="lg" className="favIcon" />
                    :
                    <FontAwesomeIcon icon={farHear} onClick={toggleLike} size="lg" className="favIcon" />
                }
                <div className="caption-text">
                    <p>{props.image.title.length < 35 ? props.image.title : props.image.title.substring(0, 34) + '...'}</p>
                    <p>{props.image.date}</p>
                </div>
            </div>
        </div>
    );
}

export default ImageCard;