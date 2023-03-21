import MoviesList from 'components/MoviesList/MoviesList';
import getTrending from 'Fetch/getTrending';
import { useEffect } from 'react';
import { useState } from 'react';

function Home() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    getTrending()
      .then(setMovies)
      .catch(function (error) {
        console.log('Error' + error);
      });
  }, []);
  return <main>{movies && <MoviesList movies={movies} />}</main>;
}

export default Home;
