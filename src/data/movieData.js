import { v4 as uuidv4 } from "uuid";

const movies = [
  {
    id:uuidv4(),
    title: 'Inception',
    description:
      'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    posterURL:
      'https://m.media-amazon.com/images/M/MV5BMTM0MjUzNjkwMl5BMl5BanBnXkFtZTcwNjY0OTk1Mw@@._V1_.jpg',
    rating: 4,
    trailerURL:"https://www.youtube.com/embed/zp_YGmAoht0?si=WtvdRL2j6EBxo3Ox"
  },
  {
    id:uuidv4(),
    title: 'The Shawshank Redemption',
    description:
      'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    posterURL:
      'https://m.media-amazon.com/images/S/pv-target-images/d56b2942bc24e60043c79b061040c63d43ba529f0db1feff055e3b7a4dcc28ce.jpg',
    rating: 8,
    trailerURL:"https://www.youtube.com/embed/NmzuHjWmXOc?si=vkdOL1uIp6lTI6yC"
  },
  {
    id:uuidv4(),
    title: 'The Godfather',
    description:
      'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    posterURL:
      'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg',
    rating: 7,
    trailerURL:"https://www.youtube.com/embed/UaVTIH8mujA?si=o1Mm3ZcwvV8AUheQ"
  },
];

export default movies;
