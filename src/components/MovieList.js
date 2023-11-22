import React from 'react';
import MovieCard from './MovieCard'; // Import MovieCard component

const MovieList = ({ movies }) => {
  return (
    <div className="container mt-4">
      <div className="row">
        {movies.map(movie => (
          <div key={movie.id} className="col-sm-12 col-md-6 col-lg-4 mb-3">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
