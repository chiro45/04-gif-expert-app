
import {useState, useEffect} from 'react';
import getGifs from '../helpers/getGifs'

export const useFethGifs = ( category )=>{
    const [state, setState] = useState({
        data: [],
        loading: true,

    });
     useEffect(()=>{
         //ejecutamos la funcion
            getGifs(category)
            //luego las imagenes van al seState
            .then(imgs=>{setState({
                data: imgs,
                loading: false,
            });
        })
       //arreglo de dependencias
     },[category])

    return state; // {data, loading}
}