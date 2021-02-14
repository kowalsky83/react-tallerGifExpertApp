import { useState, useEffect } from "react";
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {  //Hace que solo se ejecute una vez getGifs al inicio
        getGifs(category)
            .then(imagenes => setState({
                data: imagenes,
                loading: false
            }));
    }, [category])

    return state; // el estat es data:[], loading: true

}