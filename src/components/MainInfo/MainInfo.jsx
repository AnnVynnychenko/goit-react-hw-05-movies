import PropTypes from 'prop-types';
import css from './MainInfo.module.css';

const MainInfo = ({ poster, title, score, overview, genres }) => {
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  return (
    <section className={css.mainInfo}>
      <img
        src={poster ? `https://image.tmdb.org/t/p/w500/${poster}` : defaultImg}
        width={250}
        alt="poster"
        className={css.poster}
      />
      <div>
        <h1 className={css.title}>{title}</h1>
        <p className={css.score}>
          User Score: {`${Math.round((score * 100) / 10)}%`}
        </p>
        <p className={css.overviewTitle}>Overview</p>
        <p className={css.overview}>{`${overview}`}</p>
        {genres && genres.length > 0 && (
          <>
            <p className={css.genresTitle}>Genres</p>
            <ul>
              {genres.map(({ name, id }) => {
                return (
                  <li key={id} className={css.genreItem}>
                    {name}
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </div>
    </section>
  );
};

export default MainInfo;

MainInfo.propTypes = {
  poster: PropTypes.string,
  title: PropTypes.string,
  score: PropTypes.number,
  overview: PropTypes.string,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
    })
  ),
};
