/* Components */
import { FiSearch } from "react-icons/fi";

/* Styles */
import style from "./style.module.scss";

export const SearchBar = () => {
  return (
    <div className="w-3/4 h-9 flex justify-center mt-7 mb-3">
      <FiSearch className="w-8 pl-2 h-full text-zinc-400 border bg-white border-zinc-700 border-r-0 rounded-l-lg" />
      <input
        type="search"
        placeholder="Buscar"
        className="w-[60%] dark:text-black placeholder:select-none outline-none py-1 border border-zinc-700 rounded-r-lg border-l-0 text-xl text-center"
      />
    </div>
  );
};
