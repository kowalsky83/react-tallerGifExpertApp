import React from 'react'

export const GifGridItem = ({ id, title, url }) => {

    //console.table(id, title, url)
    return (
        <div className='card animate__animated animate__backInLeft'>
            <img src={url} alt={title} />
            <p>{title}</p>
            <hr />
        </div>
    )
}