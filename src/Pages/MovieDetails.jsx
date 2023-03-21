import { BackLink } from '../components/BackLink/BackLink';
import { useState, useEffect, Suspense } from 'react';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';

import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

import getMovieById from 'Fetch/getMovieById';

const MovieDetails = () => {
  const { id } = useParams();
  const [movieId, setMovieId] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  // useEffect(() => {
  //   getMovieById(id).then(setMovieId);
  // }, [id]);

  return (
    <>
      <BackLink to={backLinkHref}>Go Back</BackLink>

      <ul>
        <li>
          <Link to="cast" state={{ from: location.state.from }}>
            <Cast />
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: location.state.from }}>
            <Reviews />
          </Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
