import MovieCard from 'components/MovieCard/MovieCard';
import PropTypes from 'prop-types';
import { GalleryList } from './MoviesList.styled';

function MoviesList({ movies }) {
  return (
    <GalleryList>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </GalleryList>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      posterPath: PropTypes.string,
      overview: PropTypes.string,
      genres: PropTypes.string,
      vote: PropTypes.number,
      year: PropTypes.string,
    }).isRequired
  ).isRequired,
};

export default MoviesList;
