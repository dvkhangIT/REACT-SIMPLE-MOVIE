import { Fragment } from 'react';
// import { NavLink } from 'react-router-dom';
// `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`,fetcher
import 'swiper/scss';
import MovieList from './components/movie/MovieList';
import Banner from './components/banner/Banner';
function App() {
  return (
    <Fragment>
      <header className="header text-white flex justify-center items-center gap-x-5 py-10 mb-5">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>
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
}

export default App;
