import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import Navigation from './components/Navigation'; // Import the Navigation component
import MovieList from './components/MovieList';
import AddMovieForm from './components/AddMovieForm';
import { Modal, Button } from 'react-bootstrap';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false); // State for controlling modal visibility

  const addMovie = (movie) => {
    setMovies([...movies, { ...movie, id: Date.now() }]);
    setShowModal(false); // Close the modal after adding a movie
  };

  const handleFilterChange = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchTerm) ||
      movie.rating.toString().includes(searchTerm)
  );

  return (
    <div>
      <Navigation onFilterChange={handleFilterChange} />

      <div className='container mt-4'>
        <Button variant='primary' onClick={() => setShowModal(true)}>
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
