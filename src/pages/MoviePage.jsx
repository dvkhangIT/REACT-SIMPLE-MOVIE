import React, { useEffect, useState } from 'react';
import { apiKey, fetcher } from '../config';
import useSWR from 'swr';
import MovieCard from '../components/movie/MovieCard';
import useDebounce from '../hooks/useDebounce';

// https://api.themoviedb.org/3/search/movie
const MoviePage = () => {
  const [filter, setFilter] = useState('');
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
  );
  const filterDebounce = useDebounce(filter);

  useEffect(() => {
    if (filterDebounce) {
      setUrl(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${filterDebounce}`
      );
    } else {
      setUrl(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
    }
  }, [filterDebounce]);
  const { data } = useSWR(url, fetcher);
  const movies = data?.results || [];
  return (
    <div className="p-10">
      <div className="flex mb-10 text-white">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Type here to search"
            className="w-full p-4 outline-none bg-slate-800"
            onChange={handleFilterChange}
          />
        </div>
        <button className="bg-primary p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 "
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-4 gap-10">
        {movies.length > 0 &&
          movies.map((item) => <MovieCard item={item} key={item.id}></MovieCard>)}
      </div>
    </div>
  );
};

export default MoviePage;
