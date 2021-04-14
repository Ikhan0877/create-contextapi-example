
import React,{useState, useContext} from 'react';
import AddMovie from './AddMovie';
import { MovieProvider } from './MovieContext';

import MovieList from './MovieList';

function App() {
  //  const [Movies,setMovies] = useContext(MovieContext);
 
  return (
    <div className="App">
      <h1>Testing React Apps</h1>
      <MovieProvider>
         <div>
            <MovieList />
            <AddMovie />
         </div>
      </MovieProvider>
    </div>
  );
}

export default App;
