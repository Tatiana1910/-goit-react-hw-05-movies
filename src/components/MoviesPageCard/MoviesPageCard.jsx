import PropTypes from 'prop-types';
import {
  GalleryItem,
  GalleryImage,
  MovieTitle,
  LinkStyle,
} from './MoviesPageCard.styled';
import no_image from '../../Fetch/defaultImage/no-thumb.jpg';

function MoviesPageCard({ movie: { id, title, poster_path }, query }) {
  return (
    <GalleryItem>
      <LinkStyle
        to={`/movies/${id}/`}
        state={{ from: `/movies?name=${query}` }}
      >
        {poster_path === null ? (
          <GalleryImage src={no_image} alt={title} />
        ) : (
          <GalleryImage
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
          />
        )}
        <MovieTitle>{title}</MovieTitle>
      </LinkStyle>
    </GalleryItem>
  );
}

MoviesPageCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
  }).isRequired,
  query: PropTypes.string,
};

export default MoviesPageCard;
