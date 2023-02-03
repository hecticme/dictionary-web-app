import { HiOutlineSearch } from "react-icons/hi";

export function SearchBar() {
  return (
    <div className="search-bar">
      <input type="search" className="search-bar__input" />
      <HiOutlineSearch className="search-bar__icon" />
    </div>
  );
}
