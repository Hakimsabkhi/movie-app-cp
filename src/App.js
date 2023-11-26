import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import MovieList from './components/MovieList';
import AddMovieForm from './components/AddMovieForm';
import { Modal, Button } from 'react-bootstrap';
import moviesData from './data/movieData';


const App = () => {
  const [movies, setMovies] = useState(moviesData);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);

  const addMovie = movie => {
    setMovies([...movies, { ...movie, id: Date.now() }]);
    setShowModal(false);
  };

  const handleFilterChange = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm) ||
    movie.rating.toString().includes(searchTerm)
  );

  return (
    <div>
      <Navigation onFilterChange={handleFilterChange} />

      <div className="container mt-4">
        <Button variant="primary" onClick={() => setShowModal(true)}>
          Add Movie
        </Button>

        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add a New Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddMovieForm onNewMovie={addMovie} />
          </Modal.Body>
        </Modal>

        <MovieList movies={searchTerm ? filteredMovies : movies} />
      </div>
    </div>
  );
};

export default App;
