import { useEffect } from "react";
import SearchIcon from "/assets/icon-search.svg";

export default function SearchInput() {
  useEffect(() => {
    const searchInput = document.querySelector(".search-section > input");
    searchInput.setAttribute(
      "size",
      searchInput.getAttribute("placeholder").length
    );
  }, []);
  return (
    <div className="search-section">
      <img src={SearchIcon} alt="" />
      <input type="search" placeholder="Search for movies or TV series" />
    </div>
  );
}
