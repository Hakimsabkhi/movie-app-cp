import React, { useState } from 'react';
import Rating from 'react-rating-stars-component';

const AddMovieForm = ({ onNewMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: 0 // Initialize rating
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onNewMovie(newMovie);
    setNewMovie({ title: '', description: '', posterURL: '', rating: 0 }); // Reset form after submission
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="form-group">
        <label>Title</label>
        <input 
          type="text" 
          className="form-control" 
          value={newMovie.title} 
          onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
          required 
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea 
          className="form-control" 
          value={newMovie.description} 
          onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })} 
          required 
        />
      </div>
      <div className="form-group">
        <label>Poster URL</label>
        <input 
          type="text" 
          className="form-control" 
          value={newMovie.posterURL} 
          onChange={(e) => setNewMovie({ ...newMovie, posterURL: e.target.value })} 
          required 
        />
      </div>
      <div className="form-group">
        <label>Rating</label>
        <Rating 
          count={10}
          size={24}
          activeColor="#ffd700"
          value={newMovie.rating}
          onChange={(value) => setNewMovie({ ...newMovie, rating: value })}
        />
      </div>
      <button type="submit" className="btn btn-primary">Add Movie</button>
    </form>
  );
};

export default AddMovieForm;
