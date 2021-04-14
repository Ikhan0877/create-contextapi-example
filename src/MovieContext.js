import React,{useState,createContext} from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {
    const [movies,setMovies] = useState([
        {
            name:'harry potter',
            price: '$10',
            id:234432
        },
        {
            name:'harry ',
            price: '$10',
            id:234433
        },
        {
            name:'harry pot',
            price: '$10',
            id:234431
        }
    ]);

    return (
        <MovieContext.Provider value={[movies,setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
};
