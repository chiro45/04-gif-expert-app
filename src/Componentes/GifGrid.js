import React from 'react'
import { useFethGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
import PropTypes from 'prop-types'

export const GifGrid = ({category}) => {
    const {data:images, loading} = useFethGifs(category);
    return (
        <>
        <h3 animate__animated animate__backInRight>{category}</h3>
        {loading && <p className='loading animate__animated animate__backInLeft '>Loading...</p>}
        <div className='card-grid animate__animated animate__backInRight'>   
                {
                    images.map( img =>(
                       <GifGridItem
                       key={img.id}
                       {...img}
                       />
                    ))
                }
        </div> 
        </>
    )
}
GifGrid.propTypes ={
    category: PropTypes.string.isRequired
}