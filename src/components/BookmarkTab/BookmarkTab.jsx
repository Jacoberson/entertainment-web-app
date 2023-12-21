import BookmarkIcon from "/assets/icon-bookmark-full.svg";
import PropTypes from "prop-types";

BookmarkTab.propTypes = {
  mediaItems: PropTypes.array,
  setMediaItems: PropTypes.func,
};

export default function BookmarkTab({ mediaItems, setMediaItems }) {
  const handleBookmarking = (item, isBookmarked) => {
    const newMediaItems = mediaItems.map(newItem => {
      if (newItem === item) {
        return { ...newItem, isBookmarked: !isBookmarked };
      } else {
        return newItem;
      }
    });
    setMediaItems(newMediaItems);
    item.isBookmarked = !item.isBookmarked;
  };

  return (
    <section className="bookmark-list">
      <div className="bookmarked-movies">
        <h2>Bookmarked Movies</h2>
        <ul>
          {mediaItems
            .filter(val => val.category === "Movie" && val.isBookmarked)
            .map(item => {
              return (
                <div key={item.title} className="movie">
                  <li>
                    <img
                      className="bookmark"
                      src={BookmarkIcon}
                      alt="bookmark icon"
                      onClick={() => handleBookmarking(item, item.isBookmarked)}
                    />
                    <img
                      src={item.thumbnail.regular.small}
                      alt={`thumbnail for ${item.title}`}
                    />
                  </li>
                  <div className="text">
                    <div className="info-container">
                      <p>
                        <span>{item.year}</span>
                        <span>&bull;</span>
                        <span className="category movie">{item.category}</span>
                        <span>&bull;</span>
                        <span>{item.rating}</span>
                      </p>
                    </div>
                    <div className="title-container">
                      <h4 className="title">{item.title}</h4>
                    </div>
                  </div>
                </div>
              );
            })}
        </ul>
      </div>
      <div className="bookmarked-tv-series">
        <h2>Bookmarked TV Series</h2>
        <ul>
          {mediaItems
            .filter(val => val.category === "TV Series" && val.isBookmarked)
            .map(item => {
              return (
                <div key={item.title} className="tv-series">
                  <li>
                    <img
                      className="bookmark"
                      src={BookmarkIcon}
                      alt="bookmark icon"
                      onClick={() => handleBookmarking(item, item.isBookmarked)}
                    />
                    <img
                      src={item.thumbnail.regular.small}
                      alt={`thumbnail for ${item.title}`}
                    />
                  </li>
                  <div className="text">
                    <div className="info-container">
                      <p>
                        <span>{item.year}</span>
                        <span>&bull;</span>
                        <span className="category tv-series">
                          {item.category}
                        </span>
                        <span>&bull;</span>
                        <span>{item.rating}</span>
                      </p>
                    </div>
                    <div className="title-container">
                      <h4 className="title">{item.title}</h4>
                    </div>
                  </div>
                </div>
              );
            })}
        </ul>
      </div>
    </section>
  );
}
