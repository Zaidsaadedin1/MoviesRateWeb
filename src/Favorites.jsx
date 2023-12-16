import React, { useState, useEffect } from 'react';
import { Movie, MovieCardButton } from './Home'; 
import "../src/css/Movies.css";

const Favorites = () => {
  const [favoriteList, setFavoriteList] = useState([]);
  console.log(favoriteList)
  useEffect(() => {
    const existingFavorites = JSON.parse(localStorage.getItem("movie")) || [];
    setFavoriteList(existingFavorites);
  
  }, []); 

  function removeFromFavorite(movieKey) {
    try {
      const existingFavorites = JSON.parse(localStorage.getItem("movie")) || [];
      const updatedFavorites = existingFavorites.filter((movie) => movie.id !== movieKey);
      localStorage.setItem("movie", JSON.stringify(updatedFavorites));
      setFavoriteList(updatedFavorites);
    } catch (error) {
      console.error("Error removing from favorites:", error);
    }
  }
  
    
  
  
  

  return (
    <>
    <div className="MovieList">
    {favoriteList.map((movie) => (
    <Movie
      movieKey={movie.id}
      src={movie.src}
      title={movie.title}
      rate={movie.rate}
      date={movie.date}
      voteAvg={movie.voteAvg}
      votingCounter={movie.votingCounter}
      popularity={movie.popularity}
      language={movie.language}
      onRemove={() => removeFromFavorite(movie.id)}
      
    />
    ))}

      </div>
    </>
  );
  
};

export default Favorites;
