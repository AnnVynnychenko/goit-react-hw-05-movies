import { fetchSearchQuery } from 'api/fetchApi';
import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useSearchParams } from 'react-router-dom';
import SearchForm from 'components/SearchForm';
import MovieList from 'components/MovieList';
import css from './Movies.module.css';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState({});
  const movie = searchParams.get('movie');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!movie) return;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const fetchResult = await fetchSearchQuery(movie);
        setMovies(fetchResult);
      } catch (error) {
        toast.error('Oops, something went wrong! Please, try again!');
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [movie]);
  const handleSubmit = movie => {
    setSearchParams({ movie });
  };

  const { results } = movies;
  return (
    <section className={css.trending}>
      <SearchForm handleSubmit={handleSubmit} />
      {isLoading && <Loader />}
      {!isLoading && <MovieList movieItems={results} />}
    </section>
  );
};

export default Movies;
