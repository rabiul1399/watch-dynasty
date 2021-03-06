import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './ReviewCart.css';
const ReviewCart = (props) => {
    const { name, description, ratings, img } = props.review;
    return (
        <div className='review-cart'>

            <img src={img} alt="" />
            <h3>{name}</h3>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon><span> Rating: {ratings}</span>

            <p>{description}</p>

        </div>
    );
};

export default ReviewCart;