import React,{useContext} from 'react'
import { MovieContext } from './MovieContext';

export default function MovieList() {
    const [movies,setMovies] = useContext(MovieContext);
    return (
        <div>
            {movies.map((movie)=>{
                return <div> 
                        <h1> {movie.name}</h1> 
                        <h2>{movie.price}</h2>
                    </div>
            })}
        </div>
    )
}
