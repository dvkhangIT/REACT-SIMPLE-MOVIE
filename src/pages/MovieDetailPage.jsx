import React from 'react';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { apiKey, fetcher } from '../config';

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`,
    fetcher
  );
  //   const movies = data?.results || [];
  console.log(data);
  return <div>movie detail</div>;
};

export default MovieDetailPage;
