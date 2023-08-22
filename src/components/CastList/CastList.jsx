import PropTypes from 'prop-types';
import CastItem from 'components/CastItem';
import css from './CastList.module.css';

const CastList = ({ cast = [] }) => {
  return (
    <ul className={css.castList}>
      {cast.map(({ id, name, character, profile_path }) => {
        return (
          <CastItem
            key={id}
            name={name}
            photo={profile_path}
            character={character}
          />
        );
      })}
    </ul>
  );
};
export default CastList;

CastList.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
      profile_path: PropTypes.string,
    })
  ),
};
