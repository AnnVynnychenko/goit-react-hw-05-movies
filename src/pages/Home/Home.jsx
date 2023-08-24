import { fetchMoviesPopular } from 'api/fetchApi';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import MovieList from 'components/MovieList';
import css from './Home.module.css';

const Home = () => {
  const [movieItems, setMovieItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchResult = await fetchMoviesPopular();
        setMovieItems(fetchResult.results);
        if (fetchResult.results.length === 0) {
          return toast.error(`Sorry, there are no popular movies today.`);
        }
      } catch (error) {
        toast.error('Oops, something went wrong! Please, try again!');
      }
    };
    fetchData();
  }, []);
  return (
    <section className={css.trending}>
      <h1 className={css.trendingHeader}>Trending today</h1>
      {movieItems.length > 0 && <MovieList movieItems={movieItems} />}
    </section>
  );
};
export default Home;

Home.propTypes = {
  fetchMoviesPopular: PropTypes.func,
};
