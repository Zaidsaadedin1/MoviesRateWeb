  import React, { useEffect, useState } from "react";
  import "../src/css/Movies.css";
  import NumberingBar from "./NumberingBar";
  
  function getMovies(setMovieList, pageNumber) {
      fetch(
        `https://api.themoviedb.org/3/discover/movie?page=${pageNumber}&api_key=d11aa624ed90957359572cdc67edd08b`
      )
        .then((response) => response.json())
        .then((data) => setMovieList(data.results))
        .catch((err) => console.error(err));
    }
    
    export const addToFavorite = ({movieKey, src, title, rate, date, voteAvg, votingCounter, popularity, language }) => {
      const existingFavorites = JSON.parse(localStorage.getItem("movie")) || [];
      
      
      const isAlreadyInFavorites = existingFavorites.some(movie => movie.id === movieKey);

      if (isAlreadyInFavorites) {
        alert("This movie is already in your favorites!");
        return; 
      }

      let movieObj = {
        id:movieKey,
        src: src,
        title: title,
        rate: rate,
        date: date,
        voteAvg: voteAvg,
        votingCounter: votingCounter,
        popularity: popularity,
        language: language,
      };
    
      const updatedFavorites = [...existingFavorites, movieObj];
      localStorage.setItem("movie", JSON.stringify(updatedFavorites));
    };
    
  const Home = () => {
      const [movieList, setMovieList] = useState([]);
      const [pageNumber, setPageNumber] = useState(1);

      useEffect(() => {
          getMovies(setMovieList, pageNumber);
        }, [pageNumber]);
        
    

        const handlePageChange = (newPage) => {
          setPageNumber(newPage);
        };
        

      return (
        <>
          <div className="MovieList">
            {movieList.map((movie) => (
              <Movie
                movieKey={movie.id}
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                title={movie.title}
                rate={movie.vote_average}
                date={movie.release_date}
                voteAvg={movie.vote_average}
                votingCounter={movie.vote_count}
                popularity={movie.popularity}
                language={movie.original_language} 
              />
            ))}
          </div>
          <NumberingBar onPageChange={handlePageChange} />
        </>
      );
    };

    export function Movie({
      movieKey,
      src,
      title,
      rate,
      date,
      voteAvg,
      votingCounter,
      popularity,
      language,
      onRemove
    }) {

      const addToFavoriteHandler = () => {
        addToFavorite({ movieKey,src, title, rate, date, voteAvg, votingCounter, popularity, language });
      };
     
      return (
        <>
          <div className="MovieCard" id={movieKey}>
            <div className="MovieCardInner">
              <div className="MovieCardFront">
                <MovieImage src={src} />
                <MovieTitle title={title} />
                <MovieRate rate={rate} />
              </div>
              <div className="MovieCardBack">
                <MovieVoteAvg VoteAvg={voteAvg} />
                <MovieVotingCounter VotingCounter={votingCounter} />
                <MoviePopularity popularity={popularity} />
                <MovieDate Date={date} /> 
                <MovieLanguage Language={language} />
                <MovieCardButton text={onRemove ?"Remove":"Add to Favorite"} fun={onRemove?onRemove:addToFavoriteHandler} />
              </div>
            </div>
          
          </div>
        </>
      );
    }

    export function MovieCardButton({ text, fun }) {
      return (
        <div className="MovieCardButton">
          <button onClick={fun}>{text}</button>
        </div>
      );
    }

  export function MovieImage({ src }) {
    return (
      <div className="MovieImage">
        <img src={src} alt={src} />
      </div>
    );
  }

  export function MovieTitle({ title }) {
    return (
      <div className="MovieTitle">
        <h2>{title}</h2>
      </div>
    );
  }

  export function MovieRate({ rate }) {
    return (
      <div className="MovieRate">
        <h3>{rate}</h3>
      </div>
    );
  }

  export function MovieDate({ Date }) {
    return (
      <div className="MovieDate">
        <h2>Date :{Date}</h2>
      </div>
    );
  }

  export function MovieVoteAvg({ VoteAvg }) {
    return (
      <div className="MovieVoteAvg">
        <h2>Average vote :{VoteAvg}</h2>
      </div>
    );
  }

  export function MovieVotingCounter({ VotingCounter }) {
    return (
      <div className="MovieVotingCounter">
        <h2>Voting Counter :{VotingCounter}</h2>
      </div>
    );
  }

  export function MoviePopularity({ popularity }) {
    return (
      <div className="MoviePopularity">
        <h2>popularity :{popularity}</h2>
      </div>
    );
  }
  export function MovieLanguage({ Language }) {
    return (
      <div className="MovieLanguage">
        <h2>Language :{Language}</h2>
      </div>  
    );
  }


  
    

  export default Home;
