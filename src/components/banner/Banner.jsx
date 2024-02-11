import React from 'react';
import useSWR from 'swr';
import { apiKey, fetcher } from '../../config';
import { Swiper, SwiperSlide } from 'swiper/react';

const Banner = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`,
    fetcher
  );
  const movies = data?.results || [];
  console.log(`MovieList ~ movies:`, movies);
  return (
    <Swiper grabCursor={'true'} slidesPerView={'auto'}>
      {movies.length > 0 &&
        movies.map((item) => (
          <SwiperSlide key={item.id}>
            <BannerItem item={item}></BannerItem>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};
function BannerItem({ item }) {
  const { poster_path, title } = item;
  return (
    <section className="banner h-[500px] page-container mb-20">
      <div className="w-full h-full rounded-lg bg-white relative">
        <div
          className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] 
          to-[rgba(0,0,0,0.5)] rounded-lg"
        ></div>
        <img
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt=""
          className="w-full h-full object-center object-cover rounded-lg"
        />
        <div className="absolute bottom-5 left-5 w-full text-white">
          <h2 className="font-bold text-3xl mb-5">{title}</h2>
          <div className="flex items-center gap-x-3 mb-8">
            <span className="border border-white px-4 py-2 rounded-md">Action</span>
            <span className="border border-white px-4 py-2 rounded-md">Action</span>
            <span className="border border-white px-4 py-2 rounded-md">Action</span>
          </div>
          <button className="capitalize py-3 px-6 bg-primary rounded-lg flex gap-x-1">
            watch now
            <img src="/play.svg" alt="" className="w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
export default Banner;
