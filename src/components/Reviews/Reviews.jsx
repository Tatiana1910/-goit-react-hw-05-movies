import getMovieReviews from 'Fetch/getMovieReviews';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthorName, Items, List, NotReviews } from './Reviews.style';

const Reviews = () => {
  const { id } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    getMovieReviews(id).then(setResults);
  }, [id]);

  if (!results) {
    return null;
  }

  return (
    <>
      {results && results.length > 0 ? (
        <List>
          {results.map(({ id, author, content }) => {
            return (
              <Items key={id}>
                <AuthorName>Author:{author}</AuthorName>
                <p>{content}</p>
              </Items>
            );
          })}
        </List>
      ) : (
        <NotReviews>We don't have any reviews for this movie </NotReviews>
      )}
    </>
  );
};

export default Reviews;
