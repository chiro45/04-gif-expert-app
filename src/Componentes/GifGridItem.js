import React from 'react'
import PropTypes from 'prop-types';
export const GifGridItem = ({ title, img}) => {
    
    return (
        <div className='card animate__animated animate__backInRight'>
            <img src={img} alt={title}></img>
            <p>{title}</p>
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,

}