import { HiOutlineSearch } from "react-icons/hi";

export function SearchBar({ searchInput, setSearchInput }) {
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
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
  );
}
