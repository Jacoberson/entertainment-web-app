import EmptyBookmarkIcon from "/assets/icon-bookmark-empty.svg";
import BookmarkIcon from "/assets/icon-bookmark-full.svg";
import PropTypes from "prop-types";

RecommendedSection.propTypes = {
  mediaItems: PropTypes.array,
  setMediaItems: PropTypes.func,
  recommendedItems: PropTypes.array,
};

export default function RecommendedSection({
  mediaItems,
  setMediaItems,
  recommendedItems,
}) {
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
    <>
      <section className="recommended-section">
        <h2>Recommended for you</h2>
        <ul>
          {recommendedItems.map(item => {
            return (
              <div key={item.title} className="recommended-item">
                <li>
                  <button className="play-button">Play</button>
                  <img
                    className="bookmark"
                    src={item.isBookmarked ? BookmarkIcon : EmptyBookmarkIcon}
                    alt="bookmark icon"
                    onClick={() => handleBookmarking(item, item.isBookmarked)}
                  />
                  <picture>
                    <source
                      media="(max-width: 767px)"
                      srcSet={item.thumbnail.regular.small}
                    />
                    <source
                      media="(max-width: 1024px)"
                      srcSet={item.thumbnail.regular.medium}
                    />
                    <img
                      src={item.thumbnail.regular.large}
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
    </>
  );
}
