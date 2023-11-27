import React, { useState } from 'react';
import Rating from "@mui/material/Rating";

const AddMovieForm = ({ onNewMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: 0, 
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onNewMovie(newMovie);
    setNewMovie({ title: '', description: '', posterURL: '', rating: 0 }); // 
  };

  return (
    <form onSubmit={handleSubmit} className='mb-3'>
      <div className='form-group'>
        <label>Title</label>
        <input
          type='text'
          className='form-control'
          value={newMovie.title}
          onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
          required
        />
      </div>
      <div className='form-group'>
        <label>Description</label>
        <textarea
          className='form-control'
          value={newMovie.description}
          onChange={(e) =>
            setNewMovie({ ...newMovie, description: e.target.value })
          }
          required
        />
      </div>
      <div className='form-group'>
        <label>Poster URL</label>
        <input
          type='text'
          className='form-control'
          value={newMovie.posterURL}
          onChange={(e) =>
            setNewMovie({ ...newMovie, posterURL: e.target.value })
          }
          required
        />
      </div>
      <div className='form-group'>
        <label>Trailer URL</label>
        <input
          type='text'
          className='form-control'
          value={newMovie.trailerURL}
          onChange={(e) =>
            setNewMovie({ ...newMovie, posterURL: e.target.value })
          }
          required
        />
      </div>
      <div className='form-group'>
        <label>Rating</label>
        <Rating
          name='simple-controlled'
          max={10}
          value={newMovie.rating}
          onChange={(event, newValue) => {
            setNewMovie({ ...newMovie, rating: newValue });
          }}
        />
      </div>
      
      <button type='submit' className='btn btn-primary'>
        Add Movie
      </button>
    </form>
  );
};

export default AddMovieForm;
