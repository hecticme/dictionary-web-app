import { HiOutlineSearch } from "react-icons/hi";
import { useTheme } from "../contexts/ThemeContext";

export function SearchBar({ searchInput, setSearchInput, noMatches }) {
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const [darkTheme] = useTheme();

  return (
    <div className="search-bar-container">
      <div className={`search-bar ${darkTheme ? "dark" : ""}`}>
        <input
          type="search"
          className="search-bar__input"
          placeholder="Enter Word"
          value={searchInput}
          onChange={(e) => handleChange(e)}
        />
        <HiOutlineSearch className="search-bar__icon" />
      </div>
      {noMatches && <p className="no-matches">No definitions match.</p>}
    </div>
  );
}
