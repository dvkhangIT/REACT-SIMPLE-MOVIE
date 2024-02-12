import React, { useEffect, useState } from 'react';
import { apiKey, fetcher } from '../config';
import useSWR from 'swr';
import MovieCard from '../components/movie/MovieCard';
import useDebounce from '../hooks/useDebounce';

const MoviePage = () => {
  const pageCount = 5;
  const [filter, setFilter] = useState('');
  const [nextPage, setNextPage] = useState(1);
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${nextPage}`
  );
  const filterDebounce = useDebounce(filter);

  useEffect(() => {
    if (filterDebounce) {
      setUrl(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${filterDebounce}&page=${nextPage}`
      );
    } else {
      setUrl(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${nextPage}`
      );
    }
  }, [filterDebounce, nextPage]);
  const { data, error } = useSWR(url, fetcher);
  const loading = !data && !error;
  const movies = data?.results || [];
  //   if (!data) return null;
  //   const { page, total_pages } = data;
  //   console.log(`MoviePage ~ total_page:`, total_pages);
  //   console.log(`MoviePage ~ page:`, page);
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
      {loading && (
        <div className="w-10 h-10 border-4 border-primary rounded-full border-t-transparent mx-auto animate-spin"></div>
      )}
      <div className="grid grid-cols-4 gap-10">
        {!loading &&
          movies.length > 0 &&
          movies.map((item) => <MovieCard item={item} key={item.id}></MovieCard>)}
      </div>
      <div className="flex items-center justify-center mt-10 gap-x-5">
        <span className="cursor-pointer" onClick={() => setNextPage(nextPage - 1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </span>
        {new Array(pageCount).fill(0).map((item, index) => (
          <span
            className="cursor-pointer py-2 px-4 rounded bg-white text-slate-800 leading-none inline-block hover:bg-primary hover:text-white transition-all"
            onClick={() => setNextPage(index + 1)}
          >
            {index + 1}
          </span>
        ))}
        <span className="cursor-pointer" onClick={() => setNextPage(nextPage + 1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default MoviePage;
