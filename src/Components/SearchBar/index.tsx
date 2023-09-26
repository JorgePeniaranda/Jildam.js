/* Components */
import { FiSearch } from "react-icons/fi";

/* Styles */
import style from "./style.module.scss";

export const SearchBar = () => {
  return (
    <div className={style.searchBar} id="searchBar">
      <label htmlFor="search">
        <FiSearch />
      </label>
      <input type="search" id="search" placeholder="Buscar" />
    </div>
  );
};
