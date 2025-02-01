import s from "./SearchBar.module.css";
import { CiSearch } from "react-icons/ci";

const SearchBar = (handleSubmit, handleChange) => {
  return (
    <header className={s.header}>
      <form onSubmit={handleSubmit}>
        <button type="submit">
          <CiSearch className={s.iconSearch} />
        </button>
        <input
          onChange={handleChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default SearchBar;
