import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SearchBar.css";

function SearchBar({ onSearch, input }) {

  const handleSearch = () => {
    onSearch(input);
    console.log(input);
  };

  return (
    <div className="input-wrapper">
      <input
        id="searchInput"
        type="text"
        placeholder="Search by recipe name or keyword"
        value={input}
        onChange={(e) => onSearch(e.target.value)}
      />
      <Link to="/recipes" className="search-button" onClick={handleSearch}>
        <FontAwesomeIcon icon="magnifying-glass" />
      </Link>
    </div>
  );
}

export default SearchBar;
