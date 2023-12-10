import Logo from "../../assets/logo.svg";
import BookmarkIcon from "../../assets/icon-nav-bookmark.svg";
import HomeIcon from "../../assets/icon-nav-home.svg";
import MoviesIcon from "../../assets/icon-nav-movies.svg";
import TvIcon from "../../assets/icon-nav-tv-series.svg";
import Avatar from "../../assets/image-avatar.png";

export default function Navbar() {
  return (
    <nav>
      <div className="content">
        <img src={Logo} alt="logo" />
        <div className="navigation-icons">
          <img src={HomeIcon} alt="home" />
          <img src={MoviesIcon} alt="movies" />
          <img src={TvIcon} alt="TV shows" />
          <img src={BookmarkIcon} alt="bookmarks" />
        </div>
        <img className="avatar" src={Avatar} alt="avatar" />
      </div>
    </nav>
  );
}
