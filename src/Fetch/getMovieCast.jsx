async function getMovieCast(movieId) {
  const key = '9f20d64b7d570e0ac3d9098807701877';
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
  const filter = `?api_key=${key}&language=en-US`;

  const response = await fetch(`${url}${filter}`);
  const data = await response.json();

  return data.cast;
}

export default getMovieCast;
