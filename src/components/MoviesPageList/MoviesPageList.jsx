import React from 'react';
import PropTypes from 'prop-types';
import { GalleryList, Section } from './MoviesPageList.styled';
import MoviesPageCard from 'components/MoviesPageCard/MoviesPageCard';

function MoviesPageList({ movies }) {
  return (
    <Section>
      <GalleryList>
        {movies &&
          movies.map(movie => <MoviesPageCard key={movie.id} movie={movie} />)}
      </GalleryList>
    </Section>
  );
}

MoviesPageList.propTypes = {
  movies: PropTypes.array,
};

export default MoviesPageList;
