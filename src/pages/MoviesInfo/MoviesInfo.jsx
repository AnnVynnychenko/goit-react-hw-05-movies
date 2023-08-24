import { fetchMoviesInfo } from 'api/fetchApi';
import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import AdditionalInfo from 'components/AdditionalInfo/';
import Loader from 'components/Loader';
import MainInfo from 'components/MainInfo';
import css from './MoviesInfo.module.css';

const MoviesInfo = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const fetchResult = await fetchMoviesInfo(movieId);
        setMovieInfo(fetchResult);
      } catch (error) {
        toast.error('Oops, something went wrong! Please, try again!');
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [movieId]);
  const { poster_path, title, vote_average, overview, genres } = movieInfo;
  return (
    <>
      <Link to={backLinkLocationRef.current} className={css.backBtn}>
        Go back
      </Link>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <MainInfo
            poster={poster_path}
            title={title}
            score={vote_average}
            overview={overview}
            genres={genres}
          />
          <AdditionalInfo />
        </>
      )}
    </>
  );
};
export default MoviesInfo;

MoviesInfo.propTypes = {
  movieId: PropTypes.number,
};
