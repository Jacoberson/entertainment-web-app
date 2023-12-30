import EmptyBookmarkIcon from "/assets/icon-bookmark-empty.svg";
import BookmarkIcon from "/assets/icon-bookmark-full.svg";
import PropTypes from "prop-types";

RecommendedSection.propTypes = {
  mediaItems: PropTypes.array,
  setMediaItems: PropTypes.func,
  filteredData: PropTypes.array,
  searchTerm: PropTypes.string,
};

export default function RecommendedSection({
  mediaItems,
  setMediaItems,
  filteredData,
  searchTerm,
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
        {searchTerm === "" ? (
          <h2>Recommended for you</h2>
        ) : (
          <h2>
            {`Found ${filteredData.length} ${
              filteredData.length === 1 ? "result" : "results"
            } for '${searchTerm}'`}
          </h2>
        )}
        <ul>
          {filteredData.map(item => {
            return (
              <div key={item.title} className="recommended-item">
                <li>
                  <img
                    className="bookmark"
                    src={item.isBookmarked ? BookmarkIcon : EmptyBookmarkIcon}
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
