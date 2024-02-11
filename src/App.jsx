import { Fragment } from 'react';
import 'swiper/scss';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import Main from './components/layout/Main';
import MoviePage from './pages/MoviePage';
import MovieDetailPage from './pages/MovieDetailPage';
function App() {
  return (
    <Fragment>
      <Routes>
        <Route element={<Main></Main>}>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/movies" element={<MoviePage></MoviePage>}></Route>
          <Route
            path="/movie/:movieId"
            element={<MovieDetailPage></MovieDetailPage>}
          ></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
