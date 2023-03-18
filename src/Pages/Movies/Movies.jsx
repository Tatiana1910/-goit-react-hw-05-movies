import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Movies = () => {
  return (
    <main>
      <h1>Movies</h1>

      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default Movies;
