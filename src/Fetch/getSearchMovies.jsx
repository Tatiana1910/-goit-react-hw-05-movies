async function getSearchMovies(query, page = 1) {
  const TOKEN = '9f20d64b7d570e0ac3d9098807701877';
  const url = `https://api.themoviedb.org/3/search/movie`;
  const filter = `?api_key=${TOKEN}&query=${query}&language=en-US&page=${page}&include_adult=false`;

  const response = await fetch(`${url}${filter}`);
  const data = await response.json();
  return data.results;
}

export default getSearchMovies;
