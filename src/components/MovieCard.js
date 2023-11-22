import React from 'react';
import Rating from 'react-rating-stars-component';

const MovieCard = ({ movie }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img 
        src={movie.posterURL} 
        className="card-img-top" 
        alt={movie.title} 
        style={{ width: '100%', height: '200px', objectFit: 'cover' }} // Fixed size with object-fit
      />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">{movie.description}</p>
        <Rating value={movie.rating} editing={false} />
      </div>
    </div>
  );
};

export default MovieCard;
