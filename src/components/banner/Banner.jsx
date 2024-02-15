import React from 'react';
import useSWR from 'swr';
import { fetcher, tmdbAPI } from '../../config';
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from '../button/Button';
import { useNavigate } from 'react-router-dom';
import LoadingSkeleton from '../loading/LoadingSkeleton';

const Banner = () => {
  const { data, error } = useSWR(tmdbAPI.getMovieList('upcoming'), fetcher);
  const movies = data?.results || [];
  const isLoading = !data && !error;
  return (
    <Swiper grabCursor={'true'} slidesPerView={'auto'}>
      {movies.length > 0 &&
        !isLoading &&
        movies.map((item) => (
          <SwiperSlide key={item.id}>
            <BannerItem item={item}></BannerItem>
          </SwiperSlide>
        ))}
      {isLoading && (
        <SwiperSlide>
          <BannerItemSekeleton></BannerItemSekeleton>
        </SwiperSlide>
      )}
    </Swiper>
  );
};
function BannerItem({ item }) {
  const navigate = useNavigate();
  const { poster_path, title, id } = item;
  return (
    <section className="banner h-[500px] page-container mb-20">
      <div className="w-full h-full rounded-lg bg-white relative">
        <div
          className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] 
          to-[rgba(0,0,0,0.5)] rounded-lg"
        ></div>
        <img
          src={tmdbAPI.imageUrl(poster_path, 'original')}
          alt=""
          className="w-full h-full object-center object-cover rounded-lg"
        />
        <div className="absolute bottom-5 left-5 w-full text-white">
          <h2 className="font-bold text-3xl mb-5">{title}</h2>
          <div className="flex items-center gap-x-3 mb-8">
            <span className="border border-white px-4 py-2 rounded-md w-auto">
              Action
            </span>
            <span className="border border-white px-4 py-2 rounded-md w-auto">
              Action
            </span>
            <span className="border border-white px-4 py-2 rounded-md w-auto">
              Action
            </span>
          </div>
          <Button onClick={() => navigate(`/movie/${id}`)}>watch now</Button>
        </div>
      </div>
    </section>
  );
}
export default Banner;
const BannerItemSekeleton = () => {
  return (
    <section className="banner h-[500px] page-container mb-20">
      <div className="w-full h-full rounded-lg bg-white relative">
        <div
          className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] 
              to-[rgba(0,0,0,0.5)] rounded-lg"
        ></div>
        <LoadingSkeleton
          className={'h-full object-center object-cover rounded-lg'}
        ></LoadingSkeleton>
        <div className="absolute bottom-5 left-5 w-full">
          <LoadingSkeleton className={'h-5 mb-5'} width="300px"></LoadingSkeleton>
          <div className="flex items-center gap-x-3 mb-8">
            <LoadingSkeleton
              className={'border border-white px-4 py-2 rounded-md'}
              width="auto"
            ></LoadingSkeleton>
            <LoadingSkeleton
              className={'border border-white px-4 py-2 rounded-md'}
              width="auto"
            ></LoadingSkeleton>
            <LoadingSkeleton
              className={'border border-white px-4 py-2 rounded-md'}
              width="auto"
            ></LoadingSkeleton>
          </div>
          <LoadingSkeleton width="100px" className={'h-10 rounded-lg'}></LoadingSkeleton>
        </div>
      </div>
    </section>
  );
};
