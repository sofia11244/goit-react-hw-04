import propTypes from 'prop-types';

const SearchBar = ({ query, setQuery, handleSearch }) => (
  <form onSubmit={handleSearch}>
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search for images..."
    />
    <button type="submit">Search</button>
  </form>
);

export default SearchBar;

SearchBar.propTypes = {
  query: propTypes.string.isRequired,
  setQuery: propTypes.func.isRequired,
  handleSearch: propTypes.func.isRequired,
};