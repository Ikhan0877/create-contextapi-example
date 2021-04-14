import React,{useState,useContext} from 'react';
import { MovieContext } from './MovieContext';


export default function AddMovie() {
    const [name,setName] = useState('');
    const [price,setPrice] = useState('');
    const [movies,setMovies] = useContext(MovieContext);

    const addMovie = e =>{
      e.preventDefault();
      setMovies(prevMovies => [...prevMovies,{
          name:name,price:price
      }]);
      setName('');
      setPrice('');
    };

    return (
        <div>
            <form onSubmit={addMovie}>
                <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
                <input type="text" name="price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
                <input type="submit" value="add" />
            </form>
        </div>
    )
}
