import { useNavigate } from 'react-router-dom';
import Button from '../button/Button';
import { tmdbAPI } from '../../config';
import PropTypes from 'prop-types';
import { withErrorBoundary } from 'react-error-boundary';
import LoadingSkeleton from '../loading/LoadingSkeleton';

const MovieCard = ({ item }) => {
  const { poster_path, id, release_date, title, vote_average } = item;
  const navigate = useNavigate();
  return (
    <div className="movie-card flex flex-col rounded-lg p-3 bg-slate-800 text-white select-none h-full">
      <img
        src={tmdbAPI.imageUrl(poster_path, 'w500')}
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <div className="flex flex-col flex-1">
        <h3 className="capitalize text-xl font-bold mb-3">{title}</h3>
        <div
          className="flex items-center justify-between text-sm
    opacity-50 mb-10"
        >
          <span>{new Date(release_date).getFullYear()}</span>
          <span className="flex items-center gap-x-1">
            {typeof vote_average === 'number' && !isNaN(vote_average) ? vote_average : ''}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="yellow"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
        <Button
          bgColor="primary"
          className="w-full"
          onClick={() => navigate(`/movie/${id}`)}
        >
          watch now
        </Button>
      </div>
    </div>
  );
};
MovieCard.propTypes = {
  item: PropTypes.shape({
    poster_path: PropTypes.string,
    id: PropTypes.number,
    release_date: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number,
  }),
};
function FallbackComponent() {
  return (
    <p className="bg-red-50 text-red-400">Something went wrong with this component</p>
  );
}
export default withErrorBoundary(MovieCard, {
  FallbackComponent,
});
export const MovieCardSkeleton = () => {
  return (
    <div className="movie-card flex flex-col rounded-lg p-3 bg-slate-800 text-white select-none h-full">
      <LoadingSkeleton
        className={'w-full h-[250px] object-cover rounded-lg mb-5'}
      ></LoadingSkeleton>
      <div className="flex flex-col flex-1">
        <h3 className="capitalize text-xl font-bold mb-3">
          <LoadingSkeleton className={'w-full h-5'}></LoadingSkeleton>
        </h3>
        <div
          className="flex items-center justify-between text-sm
    opacity-50 mb-10"
        >
          <span>
            <LoadingSkeleton width="50px" height="10px"></LoadingSkeleton>
          </span>
          <span>
            <LoadingSkeleton width="30px" height="10px"></LoadingSkeleton>
          </span>
        </div>
        <LoadingSkeleton className={'h-10 rounded-lg'}></LoadingSkeleton>
      </div>
    </div>
  );
};
