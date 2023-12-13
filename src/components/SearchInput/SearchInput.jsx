import SearchIcon from "/assets/icon-search.svg";
import PropTypes from "prop-types";

SearchInput.propTypes = {
  placeholder: PropTypes.string,
};

export default function SearchInput({ placeholder }) {
  return (
    <div className="search-section">
      <img src={SearchIcon} alt="" />
      <input type="search" placeholder={placeholder} size="30" />
    </div>
  );
}
