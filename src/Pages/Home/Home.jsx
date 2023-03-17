import MoviesList from 'components/MoviesList/MoviesList';
import getTrending from 'Fetch/getTrending';
import { useEffect } from 'react';
import { useState } from 'react';
import { Main, Title } from './Home.styled';

function Home() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    getTrending()
      .then(setMovies)
      .catch(function (error) {
        console.log('Error' + error);
      });
  }, []);
  return (
    <Main>
      {movies && <Title>Trending today</Title>}
      {movies && <MoviesList movies={movies} />}
    </Main>
  );
}

export default Home;
