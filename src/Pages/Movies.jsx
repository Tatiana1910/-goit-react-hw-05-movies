import MoviesPageList from 'components/MoviesPageList/MoviesPageList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import getSearchMovies from 'Fetch/getSearchMovies';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Movies = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get('query') ?? '';
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    if (!query) return;
    getSearchMovies(query)
      .then(setMovies)
      .catch(function (error) {
        console.log('Error: ' + error);
      });
  }, [query]);

  return (
    <main>
      <SearchForm />
      {movies && <MoviesPageList query={query} movies={movies} />}
    </main>
  );
};

export default Movies;
