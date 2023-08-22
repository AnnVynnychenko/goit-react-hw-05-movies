import { fetchMoviesCast } from 'api/fetchApi';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import CastList from 'components/CastList';
import Loader from 'components/Loader';

const MovieCast = () => {
  const { movieId } = useParams();
  const [castInfo, setCastInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (!movieId) return;
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const fetchResult = await fetchMoviesCast(movieId);
        setCastInfo(fetchResult);
      } catch (error) {
        toast.error('Oops, something went wrong! Please, try again!');
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [movieId]);
  const { cast } = castInfo;
  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && <CastList cast={cast} />}
    </>
  );
};
export default MovieCast;

MovieCast.propTypes = {
  movieId: PropTypes.number,
};
