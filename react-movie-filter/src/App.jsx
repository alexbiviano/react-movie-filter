import React, { useState, useEffect } from 'react';  

const App = () => {  
  const movies = [  
    { title: 'Inception', genre: 'Fantascienza' },  
    { title: 'Il Padrino', genre: 'Thriller' },  
    { title: 'Titanic', genre: 'Romantico' },  
    { title: 'Batman', genre: 'Azione' },  
    { title: 'Interstellar', genre: 'Fantascienza' },  
    { title: 'Pulp Fiction', genre: 'Thriller' },  
  ];  

  const [selectedGenre, setSelectedGenre] = useState('');  
  const [filteredMovies, setFilteredMovies] = useState(movies);  

  useEffect(() => {   
    if (selectedGenre) {  
      setFilteredMovies(movies.filter(movie => movie.genre === selectedGenre));  
    } else {  
      setFilteredMovies(movies);  
    }  
  }, [selectedGenre, movies]);  

  const handleGenreChange = (event) => {  
    setSelectedGenre(event.target.value);  
  };  

  return (  
    <div>  
      <h1>Lista di Film</h1>  
      <label htmlFor="genre">Seleziona un genere:</label>  
      <select id="genre" onChange={handleGenreChange} value={selectedGenre}>  
        <option value="">Tutti</option>  
        <option value="Fantascienza">Fantascienza</option>  
        <option value="Thriller">Thriller</option>  
        <option value="Romantico">Romantico</option>  
        <option value="Azione">Azione</option>  
      </select>  

      <ul>  
        {filteredMovies.map((movie, index) => (  
          <li key={index}>{movie.title} - {movie.genre}</li>  
        ))}  
      </ul>  
    </div>  
  );  
};  

export default App;  