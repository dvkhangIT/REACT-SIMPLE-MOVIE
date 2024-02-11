import React from 'react';

const MovieCard = () => {
  return (
    <div className="movie-card rounded-lg p-3 bg-slate-800 text-white select-none">
      <img
        src="https://image.api.playstation.com/vulcan/ap/rnd/202008/1020/T45iRN1bhiWcJUzST6UFGBvO.png"
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <h3 className="capitalize text-xl font-bold mb-3">spiderman: homecoming</h3>
      <div
        className="flex items-center justify-between text-sm
    opacity-50 mb-10"
      >
        <span>2024</span>
        <span className="flex items-center gap-x-1">
          7.4
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
      <button
        className="capitalize py-3 px-6 bg-primary rounded-lg flex gap-x-1 w-full
    items-center justify-center"
      >
        watch now
        <img src="/play.svg" alt="" className="w-6" />
      </button>
    </div>
  );
};

export default MovieCard;
