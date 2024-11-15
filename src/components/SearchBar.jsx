import propTypes from 'prop-types';
import style from '../App.module.css';

const SearchBar = ({ query, setQuery, handleSearch }) => (
  <form onSubmit={handleSearch} className={style.searchForm}>
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search for images..."
    />
    <button className={style.button} type="submit">Search</button>
  </form>
);

export default SearchBar;

SearchBar.propTypes = {
  query: propTypes.string.isRequired,
  setQuery: propTypes.func.isRequired,
  handleSearch: propTypes.func.isRequired,
};