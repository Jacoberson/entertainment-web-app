import SearchIcon from "/assets/icon-search.svg";
import PropTypes from "prop-types";

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  searchTerm: PropTypes.string,
  setSearchTerm: PropTypes.func,
};

export default function SearchInput({
  placeholder,
  searchTerm,
  setSearchTerm,
}) {
  const handleChange = e => {
    e.preventDefault();
    setSearchTerm(e.target.value.toLowerCase());
  };

  return (
    <div className="search-section">
      <img src={SearchIcon} alt="" />
      <input
        type="search"
        placeholder={placeholder}
        size="30"
        onChange={handleChange}
        value={searchTerm}
      />
    </div>
  );
}
