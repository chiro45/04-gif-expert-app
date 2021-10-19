import React from 'react'

export const GifGridItem = ({id, title, img}) => {
    
    return (
        
        <div className='card animate__animated animate__backInRight'>
            <img src={img} alt={title}></img>
            <p>{title}</p>
        </div>
    )
}
