import PropTypes from 'prop-types';
import { SerchForm, SerchButton } from './SearchForm.styled';
import { ReactComponent as SerchIcon } from './../../images/search.svg';

const SearchFormForMovies = ({ value, onChange, onSubmit }) => {
  return (
    <SerchForm onSubmit={onSubmit}>
      <input
        name="search"
        type="text"
        placeholder="Movies search..."
        value={value}
        onChange={onChange}
      />
      <SerchButton type="submit">
        <SerchIcon width="20px" height="20px" />
      </SerchButton>
    </SerchForm>
  );
};

SearchFormForMovies.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SearchFormForMovies;
