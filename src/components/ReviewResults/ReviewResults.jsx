import PropTypes from 'prop-types';
import css from './ReviewResults.module.css';

const ReviewResults = ({ results = [] }) => {
  return (
    <ul>
      {results.map(({ author, content, id }) => {
        return (
          <li key={id} className={css.reviewItem}>
            <p className={css.author}>Author: {author}</p>
            <p className={css.content}>{content}</p>
          </li>
        );
      })}
    </ul>
  );
};
export default ReviewResults;

ReviewResults.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
