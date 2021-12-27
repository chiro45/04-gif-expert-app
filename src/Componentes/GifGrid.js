import React from 'react'
import { useFethGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
import PropTypes from 'prop-types'

export const GifGrid = ({category}) => {
    const {data:images, loading} = useFethGifs(category);
    return (
        <>
        {/* añadimos animacion a la categoria al loading y a la caja dobnde devuelve el gif */}
        <h3 animate__animated animate__backInRight>{category}</h3>
        {loading && <p className='loading animate__animated animate__backInLeft '>Loading...</p>}
        <div className='card-grid animate__animated animate__backInRight '>   
                {
                    //hacemos un .map y mostramos las 10 imagenes
                    images.map( img =>(
                       <GifGridItem
                       key={img.id}
                       //spread operator para img
                       {...img}
                       />
                    ))
                }
        </div> 
       
        </>
    )
}
//aseguramos que nuestro componente cumpla las propiedades
GifGrid.propTypes ={
    category: PropTypes.string.isRequired
}