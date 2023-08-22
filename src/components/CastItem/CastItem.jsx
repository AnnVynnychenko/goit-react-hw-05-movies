import PropTypes from 'prop-types';
import css from './CastItem.module.css';

const CastItem = ({ name, character, photo }) => {
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  return (
    <li className={css.castItem}>
      <img
        src={photo ? `https://image.tmdb.org/t/p/w500/${photo}` : defaultImg}
        width={100}
        alt="actor"
        className={css.photo}
      />
      <p className={css.castText}>{name}</p>
      <p className={css.castText}>{character}</p>
    </li>
  );
};
export default CastItem;

CastItem.propTypes = {
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  photo: PropTypes.string,
};
