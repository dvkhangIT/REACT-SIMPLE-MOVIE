import { Fragment, lazy, Suspense } from 'react';
import 'swiper/scss';
import { Route, Routes } from 'react-router-dom';
import Main from './components/layout/Main';
// import HomePage from './pages/HomePage';
// import MoviePage from './pages/MoviePage';
// import MovieDetailPage from './pages/MovieDetailPage';
const HomePage = lazy(() => import('./pages/HomePage'));
const MoviePage = lazy(() => import('./pages/MoviePage'));
const MovieDetailPage = lazy(() => import('./pages/MovieDetailPage'));

function App() {
  return (
    <Fragment>
      <Suspense fallback={<>Loading...</>}>
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
      </Suspense>
    </Fragment>
  );
}

export default App;
