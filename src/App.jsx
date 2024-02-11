import { Fragment } from 'react';
// import { NavLink } from 'react-router-dom';
// `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`,fetcher
import 'swiper/scss';
import MovieList from './components/movie/MovieList';
import Banner from './components/banner/Banner';
import Header from './components/layout/Header';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import Main from './components/layout/Main';
import MoviePage from './pages/MoviePage';
function App() {
  return (
    <Fragment>
      <Routes>
        <Route element={<Main></Main>}>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/movie" element={<MoviePage></MoviePage>}></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
