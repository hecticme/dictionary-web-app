import { HiOutlineSearch } from "react-icons/hi";

export function SearchBar({ searchInput, setSearchInput, noMatches }) {
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="search-bar-container">
      <div className="search-bar">
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
