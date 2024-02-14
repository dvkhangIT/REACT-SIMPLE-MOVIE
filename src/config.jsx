export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = 'a908dda9007a722d6c0260636a64ad0f';
const tmdbEndpoint = 'https://api.themoviedb.org/3/movie';
export const tmdbAPI = {
  getMovieList: (type) => `${tmdbEndpoint}/${type}?api_key=${apiKey}`,
  getMovieDetails: (movieId) => `${tmdbEndpoint}/${movieId}?api_key=${apiKey}`,
  getMovieMeta: (movieId, type) => `${tmdbEndpoint}/${movieId}/${type}?api_key=${apiKey}`,
  imageUrl: (url, type) => `https://image.tmdb.org/t/p/${type}/${url}`,
};
