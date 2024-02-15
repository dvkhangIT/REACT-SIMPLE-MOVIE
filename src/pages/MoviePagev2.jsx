import { useEffect, useState } from 'react';
import { fetcher, tmdbAPI } from '../config';
import useSWR from 'swr';
import MovieCard, { MovieCardSkeleton } from '../components/movie/MovieCard';
import useDebounce from '../hooks/useDebounce';
import ReactPaginate from 'react-paginate';
import { v4 } from 'uuid';
import useSWRInfinite from 'swr/infinite';

const itemsPerPage = 20;
const MoviePagev2 = () => {
  const [filter, setFilter] = useState('');
  const [nextPage, setNextPage] = useState(1);
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const [url, setUrl] = useState(tmdbAPI.getMovieList('popular', nextPage));
  const filterDebounce = useDebounce(filter);

  useEffect(() => {
    if (filterDebounce) {
      setUrl(tmdbAPI.getMovieSearch(filterDebounce, nextPage));
    } else {
      setUrl(tmdbAPI.getMovieList('popular', nextPage));
    }
  }, [filterDebounce, nextPage]);
  const { data, mutate, size, setSize } = useSWRInfinite(
    (index) => url.replace('page=1', `page=${index + 1}`),
    fetcher
  );
  const movies = data ? data.reduce((a, b) => a.concat(b.results), []) : [];
  console.log(`MoviePagev2 ~ movies:`, movies);
  const isEmpty = data?.[0]?.results.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.results.length < itemsPerPage);
  console.log(`MoviePagev2 ~ isReachingEnd:`, isReachingEnd);
  const loading = !data;

  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  useEffect(() => {
    if (!data || !data.total_results) return;
    setPageCount(Math.ceil(data.total_results / itemsPerPage));
  }, [data, itemOffset]);

  return (
    <div className=" xl:p-10 sm:p-5 lg:p-10">
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
        <div
          className="grid xl:grid-cols-4 xl:gap-10 grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-5
      lg:grid-cols-4 lg:gap-5"
        >
          {new Array(itemsPerPage).fill(0).map((index) => (
            <MovieCardSkeleton key={v4()}></MovieCardSkeleton>
          ))}
        </div>
      )}
      <div
        className="grid xl:grid-cols-4 xl:gap-10 grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-5
      lg:grid-cols-4 lg:gap-5"
      >
        {!loading &&
          movies.length > 0 &&
          movies.map((item) => <MovieCard item={item} key={item.id}></MovieCard>)}
      </div>
      <div className="mt-10 text-center">
        <button
          disabled={isReachingEnd}
          onClick={() => (isReachingEnd ? {} : setSize(size + 1))}
          className={`cursor-pointer transition-all ${
            isReachingEnd ? 'select-none text-gray-500' : 'hover:text-primary'
          }`}
        >
          Load more...
        </button>
      </div>
    </div>
  );
};

export default MoviePagev2;
