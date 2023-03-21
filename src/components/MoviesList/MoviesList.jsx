import MovieCard from 'components/MovieCard/MovieCard';
import PropTypes from 'prop-types';
import { GalleryList, Title } from './MoviesList.styled';

function MoviesList({ movies }) {
  return (
    <>
      <Title>Trending today</Title>
      <GalleryList>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </GalleryList>
    </>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MoviesList;
