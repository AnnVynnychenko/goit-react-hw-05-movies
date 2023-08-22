import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-toastify';
import css from './SearchForm.module.css';

const SearchForm = ({ handleSubmit }) => {
  const [movieRequest, setMovieRequest] = useState('');
  const handleInput = e => {
    setMovieRequest(e.target.value);
  };
  const handleFormSubmit = e => {
    e.preventDefault();
    if (!movieRequest.trim()) {
      toast.warn('Enter movie title, please!');
      return;
    }
    handleSubmit(movieRequest);
    setMovieRequest('');
  };
  return (
    <>
      <form onSubmit={handleFormSubmit} className={css.searchForm}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          value={movieRequest}
          placeholder="Search movies"
          onChange={handleInput}
          className={css.input}
        />
        <button type="submit" className={css.searchBtn}>
          Search
        </button>
      </form>
    </>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  handleSubmit: PropTypes.func,
};
