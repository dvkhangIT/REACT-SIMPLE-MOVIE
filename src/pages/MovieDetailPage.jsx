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
  if (!data) return null;
  const { backdrop_path, poster_path, title, genres, overview } = data;
  return (
    <div className="py-10">
      <div className="w-full h-[600px] relative">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div
          className="w-full h-full bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
          }}
        ></div>
      </div>
      <div className="w-full h-[400px] max-w-[800px] mx-auto -mt-[200px] relative z-10 pb-10">
        <img
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <h1 className="text-center font-bold mb-10 text-3xl text-white">{title}</h1>
      {genres.length > 0 && (
        <div className="flex items-center justify-center gap-x-10 mb-10">
          {genres.map((item) => (
            <span
              className="border border-primary text-primary rounded py-2 px-4"
              key={item.id}
            >
              {item.name}
            </span>
          ))}
        </div>
      )}
      <div className="text-center leading-relaxed max-w-[600px] mx-auto">{overview}</div>
    </div>
  );
};

export default MovieDetailPage;
