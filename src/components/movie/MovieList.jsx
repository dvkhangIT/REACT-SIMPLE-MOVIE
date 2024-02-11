import MovieCard from './MovieCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import useSWR from 'swr';
import { apiKey, fetcher } from '../../config';
const MovieList = ({ type = 'now_playing' }) => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${type}?api_key=${apiKey}`,
    fetcher
  );
  const movies = data?.results || [];
  console.log(`MovieList ~ movies:`, movies);
  return (
    <div className="movie-list">
      <Swiper grabCursor={true} spaceBetween={40} slidesPerView={'auto'}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard item={item}></MovieCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MovieList;