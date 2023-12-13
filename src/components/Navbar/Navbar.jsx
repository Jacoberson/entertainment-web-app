import { useEffect } from "react";
import Logo from "/assets/logo.svg";
import BookmarkIcon from "/assets/icon-nav-bookmark.svg";
import HomeIcon from "/assets/icon-nav-home.svg";
import MoviesIcon from "/assets/icon-nav-movies.svg";
import TvIcon from "/assets/icon-nav-tv-series.svg";
import Avatar from "/assets/image-avatar.png";
import { PropTypes } from "prop-types";

Navbar.propTypes = {
  selectedNavItem: PropTypes.string,
  setSelectedNavItem: PropTypes.func,
};

export default function Navbar({ selectedNavItem, setSelectedNavItem }) {
  useEffect(() => {
    const buttons = document.querySelectorAll("button > img");
    buttons.forEach(button => button.classList.remove("selected"));

    const selectedButton = document.querySelector(`.${selectedNavItem}`);
    selectedButton.classList.add("selected");
  }, [selectedNavItem]);

  return (
    <nav>
      <div className="content">
        <img src={Logo} alt="logo" />
        <div className="navigation-icons">
          <button type="button" onClick={() => setSelectedNavItem("home")}>
            <img className="home selected" src={HomeIcon} alt="home" />
          </button>
          <button type="button" onClick={() => setSelectedNavItem("movies")}>
            <img className="movies" src={MoviesIcon} alt="movies" />
          </button>
          <button type="button" onClick={() => setSelectedNavItem("tv")}>
            <img className="tv" src={TvIcon} alt="TV shows" />
          </button>
          <button type="button" onClick={() => setSelectedNavItem("bookmarks")}>
            <img className="bookmarks" src={BookmarkIcon} alt="bookmarks" />
          </button>
        </div>
        <img className="avatar" src={Avatar} alt="avatar" />
      </div>
    </nav>
  );
}
