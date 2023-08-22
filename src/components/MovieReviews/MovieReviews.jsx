import { fetchMoviesReviews } from 'api/fetchApi';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from 'components/Loader';
import ReviewResults from 'components/ReviewResults';
import css from './MovieReviews.module.css';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviewsInfo, setReviewsInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      if (!movieId) return;
      setIsLoading(true);
      try {
        const fetchResult = await fetchMoviesReviews(movieId);
        setReviewsInfo(fetchResult);
      } catch (error) {
        toast.error('Oops, something went wrong! Please, try again!');
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [movieId]);
  const { results } = reviewsInfo;
  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          {results && results.length > 0 ? (
            <ReviewResults results={results} />
          ) : (
            <p className={css.noReview}>
              We don't have any reviews for this movie.
            </p>
          )}
        </>
      )}
    </>
  );
};
export default MovieReviews;

MovieReviews.propTypes = {
  movieId: PropTypes.number,
};
