import { Fragment } from 'react';
// import { NavLink } from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <header className="header text-white flex justify-center items-center gap-x-5 py-10 mb-5">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>
      <section className="banner h-[500px] page-container mb-20">
        <div className="w-full h-full rounded-lg bg-white relative">
          <div
            className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] 
            to-[rgba(0,0,0,0.5)] rounded-lg"
          ></div>
          <img
            src="https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/21/1464170390-avengers.jpg?crop=1xw:1.0xh;center,top&resize=1200:*"
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute bottom-5 left-5 w-full text-white">
            <h2 className="font-bold text-3xl mb-5">Avenger: Endgame</h2>
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
      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white text-3xl font-bold mb-10">now playing</h2>
        <div className="movie-list grid grid-cols-4 gap-10">
          <div className="movie-card rounded-lg p-3 bg-slate-800 text-white">
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
              <span className="flex">7.4</span>
            </div>
            <button
              className="capitalize py-3 px-6 bg-primary rounded-lg flex gap-x-1 w-full
            items-center justify-center"
            >
              watch now
              <img src="/play.svg" alt="" className="w-6" />
            </button>
          </div>
        </div>
      </section>
      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white text-3xl font-bold mb-10">top rated</h2>
        <div className="movie-list grid grid-cols-4 gap-10">
          <div className="movie-card rounded-lg p-3 bg-slate-800 text-white">
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
              <span>7.4</span>
            </div>
            <button
              className="capitalize py-3 px-6 bg-primary rounded-lg flex gap-x-1 w-full
            items-center justify-center"
            >
              watch now
              <img src="/play.svg" alt="" className="w-6" />
            </button>
          </div>
        </div>
      </section>
      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white text-3xl font-bold mb-10">trending</h2>
        <div className="movie-list grid grid-cols-4 gap-10">
          <div className="movie-card rounded-lg p-3 bg-slate-800 text-white">
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
              <span>7.4</span>
            </div>
            <button
              className="capitalize py-3 px-6 bg-primary rounded-lg flex gap-x-1 w-full
            items-center justify-center"
            >
              watch now
              <img src="/play.svg" alt="" className="w-6" />
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default App;
