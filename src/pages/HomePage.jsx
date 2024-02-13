import { Fragment } from 'react';
import MovieList from '../components/movie/MovieList';
import Banner from '../components/banner/Banner';

const HomePage = () => {
  return (
    <Fragment>
      <Banner></Banner>
      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white text-3xl font-bold mb-10">now playing</h2>
        <MovieList></MovieList>
      </section>
      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white text-3xl font-bold mb-10">top rated</h2>
        <MovieList type="top_rated"></MovieList>
      </section>
      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white text-3xl font-bold mb-10">trending</h2>
        <MovieList type="popular"></MovieList>
      </section>
    </Fragment>
  );
};

export default HomePage;
