import MovieCard, { MovieCardSkeleton } from './MovieCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import useSWR from 'swr';
import { fetcher, tmdbAPI } from '../../config';
import PropTypes from 'prop-types';
import { withErrorBoundary } from 'react-error-boundary';

const MovieList = ({ type = 'now_playing' }) => {
  const { data, error } = useSWR(tmdbAPI.getMovieList(type), fetcher);
  const movies = data?.results || [];
  const isLoadig = !data && !error;
  return (
    <div className="movie-list">
      {isLoadig && (
        <Swiper grabCursor={true} spaceBetween={40} slidesPerView={'auto'}>
          <SwiperSlide>
            <MovieCardSkeleton></MovieCardSkeleton>
          </SwiperSlide>
          <SwiperSlide>
            <MovieCardSkeleton></MovieCardSkeleton>
          </SwiperSlide>
          <SwiperSlide>
            <MovieCardSkeleton></MovieCardSkeleton>
          </SwiperSlide>
          <SwiperSlide>
            <MovieCardSkeleton></MovieCardSkeleton>
          </SwiperSlide>
        </Swiper>
      )}
      {!isLoadig && (
        <Swiper grabCursor={true} spaceBetween={40} slidesPerView={'auto'}>
          {movies.length > 0 &&
            movies.map((item) => (
              <SwiperSlide key={item.id}>
                <MovieCard item={item}></MovieCard>
              </SwiperSlide>
            ))}
        </Swiper>
      )}
    </div>
  );
};
MovieList.propTypes = {
  type: PropTypes.string.isRequired,
};
function FallbackComponent() {
  return (
    <p className="bg-red-50 text-red-400">Something went wrong with this component</p>
  );
}
export default withErrorBoundary(MovieList, {
  FallbackComponent,
});
