import MoviesPageList from 'components/MoviesPageList/MoviesPageList';
import { Form, Icon, Input, SearchButton } from 'Pages/Movies/Movies.styled';

import getSearchMovies from 'Fetch/getSearchMovies';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState('');
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) return;
    getSearchMovies(query)
      .then(setMovies)
      .catch(function (error) {
        console.log('Error: ' + error);
      });
  }, [query]);

  const onSubmitForm = e => {
    if (!inputValue) {
      setMovies([]);
      return;
    }
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams(
      inputValue !== '' ? { query: form.elements.query.value } : {}
    );
    setInputValue('');
    form.reset();
  };

  const onChangeInput = value => {
    setInputValue(value);
  };

  if (!movies) {
    return null;
  }

  return (
    <main>
      <Form onSubmit={onSubmitForm}>
        <Input
          name="query"
          type="text"
          value={inputValue}
          onChange={e =>
            onChangeInput(e.currentTarget.value.toLocaleLowerCase())
          }
          placeholder="SearchMovies"
        />
        <SearchButton type="submit">
          <Icon />
        </SearchButton>
      </Form>
      {movies && <MoviesPageList query={query} movies={movies} />}
    </main>
  );
};

export default Movies;
