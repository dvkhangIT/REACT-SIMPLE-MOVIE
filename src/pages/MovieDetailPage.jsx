import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { fetcher, tmdbAPI } from '../config';
import { Swiper, SwiperSlide } from 'swiper/react';
import MovieCard from '../components/movie/MovieCard';
import LoadingSkeleton from '../components/loading/LoadingSkeleton';

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const { data } = useSWR(tmdbAPI.getMovieDetails(movieId), fetcher);
  if (!data) return null;
  const { backdrop_path, poster_path, title, genres, overview } = data;
  return (
    <div className="py-10">
      <div className="w-full h-[600px] relative">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div
          className="w-full h-full bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${tmdbAPI.imageUrl(backdrop_path, 'original')})`,
          }}
        ></div>
      </div>
      <div className="w-full h-[400px] max-w-[800px] mx-auto -mt-[200px] relative z-10 pb-10">
        <img
          src={tmdbAPI.imageUrl(poster_path, 'original')}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <h1 className="text-center font-bold mb-10 text-4xl text-white">{title}</h1>
      {genres.length > 0 && (
        <div className="flex items-center justify-center gap-5 mb-10 flex-wrap xl:gap-x-10 xl:flex-nowrap lg: gap-x-10 lg:flex-nowrap">
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
      <p className="text-center leading-relaxed max-w-[600px] mx-auto mb-10">
        {overview}
      </p>
      <MovieMeta type="credits"></MovieMeta>
      <MovieMeta type="videos"></MovieMeta>
      <MovieMeta type="similar"></MovieMeta>
    </div>
  );
};
function MovieMeta({ type = 'videos' }) {
  const { movieId } = useParams();
  const { data, error } = useSWR(tmdbAPI.getMovieMeta(movieId, type), fetcher);
  const isLoading = !data && !error;
  if (!data) return null;
  if (type === 'credits') {
    const { cast } = data;
    if (!cast || cast.length <= 0) return null;
    return (
      <div className="py-10">
        <h2 className="capitalize text-center text-3xl mb-10">casts</h2>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-5 lg:grid-cols-4 lg:gap-5">
          {cast.slice(0, 4).map((item) => (
            <div className="cast-item" key={item.id}>
              <img
                src={tmdbAPI.imageUrl(item.profile_path, 'original')}
                className="w-full object-cover h-[350px] rounded-lg mb-3"
              />
              <h3 className="text-xl font-medium">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    const { results } = data;
    if (!results || results.length <= 0) return null;
    if (type === 'videos') {
      return (
        <div className="py-10">
          <div className="flex flex-col gap-10">
            {results.slice(0, 2).map((item) => (
              <div className="" key={item.id}>
                <h3 className="mb-5 text-xl font-medium p-3 bg-secondary inline-block">
                  {item.name}
                </h3>
                <div key={item.id} className="w-full aspect-video">
                  <iframe
                    width="935"
                    height="526"
                    src={`https://www.youtube.com/embed/${item.key}`}
                    title="Badland Hunters | Inside Look | Netflix [ENG SUB]"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full object-fill"
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
    if (type === 'similar') {
      return (
        <div className="py-10">
          <h2 className="text-3xl font-medium mb-10">Similar movies</h2>
          <div className="movie-list">
            <Swiper grabCursor={true} spaceBetween={40} slidesPerView={'auto'}>
              {results.length > 0 &&
                results.map((item) => (
                  <SwiperSlide key={item.id}>
                    <MovieCard item={item}></MovieCard>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      );
    }
  }
  return null;
}
export default MovieDetailPage;
