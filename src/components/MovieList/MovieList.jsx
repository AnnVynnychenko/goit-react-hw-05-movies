import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

const MovieList = ({ movieItems = [] }) => {
  const location = useLocation();

  return (
    <ul className={css.movieList}>
      {movieItems.map(({ id, title }) => {
        return (
          <li key={id} className={css.trendingListItem}>
            <Link
              to={`/movies/${id}`}
              state={{ from: location }}
              className={css.trendingListLink}
            >
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;

MovieList.propTypes = {
  movieItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
