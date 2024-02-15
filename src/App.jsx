import { Fragment, lazy, Suspense } from 'react';
import 'swiper/scss';
import { Route, Routes } from 'react-router-dom';
import Main from './components/layout/Main';
const HomePage = lazy(() => import('./pages/HomePage'));
// const MoviePage = lazy(() => import('./pages/MoviePage'));
const MoviePagev2 = lazy(() => import('./pages/MoviePagev2'));
const MovieDetailPage = lazy(() => import('./pages/MovieDetailPage'));

function App() {
  return (
    <Fragment>
      <Suspense fallback={<></>}>
        <Routes>
          <Route element={<Main></Main>}>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/movies" element={<MoviePagev2></MoviePagev2>}></Route>
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
