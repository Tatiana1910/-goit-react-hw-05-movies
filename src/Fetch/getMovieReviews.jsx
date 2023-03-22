async function getMovieReviews(movieId) {
  const key = '9f20d64b7d570e0ac3d9098807701877';
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews`;
  const filter = `?api_key=${key}&language=en-US&page=1`;

  const response = await fetch(`${url}${filter}`);
  const data = await response.json();
  return data;
}

export default getMovieReviews;
