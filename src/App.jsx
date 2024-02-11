import { Fragment } from 'react';
// import { NavLink } from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <header className="header text-white flex justify-center items-center gap-x-5 py-10">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>
      <section className="banner h-[500px] page-container">
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default App;
