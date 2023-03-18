// import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  GalleryItem,
  GalleryImage,
  MovieTitle,
  LinkStyle,
} from './MovieCard.styled';

function MovieCard({ movie: { id, title, poster_path } }) {
  // const location = useLocation();

  return (
    <GalleryItem>
      <LinkStyle to={`/movies/${id}`}>
        <GalleryImage
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
        <MovieTitle>{title}</MovieTitle>
      </LinkStyle>
    </GalleryItem>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
