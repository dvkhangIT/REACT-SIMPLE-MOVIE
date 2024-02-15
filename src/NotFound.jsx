import React from 'react';

const NotFound = () => {
  return (
    <div class="min-h-screen flex flex-grow items-center justify-center ">
      <div class="rounded-lg bg-slate-700 p-8 text-center shadow-xl">
        <h1 class="mb-4 text-4xl font-bold">404</h1>
        <p class="text-white">Oops! The page you are looking for could not be found.</p>
        <a
          href="/"
          class="mt-4 inline-block rounded bg-primary px-4 py-2 font-semibold text-white"
        >
          Go back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
