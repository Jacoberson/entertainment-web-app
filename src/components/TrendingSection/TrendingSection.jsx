import EmptyBookmarkIcon from "/assets/icon-bookmark-empty.svg";
import BookmarkIcon from "/assets/icon-bookmark-full.svg";
import PropTypes from "prop-types";

TrendingSection.propTypes = {
  mediaItems: PropTypes.array,
  setMediaItems: PropTypes.func,
};

export default function TrendingSection({ mediaItems, setMediaItems }) {
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
    <section className="trending-section">
      <h2>Trending</h2>
      <ul>
        {mediaItems
          .filter(val => val.isTrending === true)
          .map(item => {
            return (
              <div key={item.title} className="trending-item">
                <li>
                  <img
                    className="bookmark"
                    src={item.isBookmarked ? BookmarkIcon : EmptyBookmarkIcon}
                    alt="bookmark icon"
                    onClick={() => handleBookmarking(item, item.isBookmarked)}
                  />
                  <picture>
                    <source
                      media="(max-width: 767px)"
                      srcSet={item.thumbnail.trending.small}
                    />
                    <img
                      src={item.thumbnail.trending.large}
                      alt={`thumbnail for ${item.title}`}
                    />
                  </picture>
                </li>
                <div className="text">
                  <div className="info-container">
                    <p>
                      <span>{item.year}</span>
                      <span>&bull;</span>
                      <span
                        className={`category ${item.category
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
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
    </section>
  );
}
