import React, { useState, useEffect } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    //renombarmos data a images solo para ordenar data:images se podria haber ocupado el nombre data no mas
    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {loading && <p className='animate__animated animate__flash'>Cargando...</p>}
            <div className='card-grid'>

                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img} />
                    ))
                }

            </div>
        </>
    )
}
