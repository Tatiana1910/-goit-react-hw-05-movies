import getMovieCast from 'Fetch/getMovieCast';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import noImg from '../../Fetch/defaultImage/no-thumb.jpg';
import { ImgActor, ItemActor, ListActor } from './Cast.styled';
const Cast = () => {
  const { id } = useParams();
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    getMovieCast(id).then(setCredits);
  }, [id]);

  if (!credits) {
    return null;
  }

  return (
    <>
      <ListActor>
        {credits.length > 0 &&
          credits.map(({ id, original_name, character, profile_path }) => {
            return (
              <ItemActor key={id}>
                {profile_path == null ? (
                  <ImgActor src={noImg} alt={original_name} />
                ) : (
                  <ImgActor
                    src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                    alt={original_name}
                  />
                )}
                <h4>{original_name}</h4>
                <p>Character:{character}</p>
              </ItemActor>
            );
          })}
      </ListActor>
    </>
  );
};

export default Cast;
