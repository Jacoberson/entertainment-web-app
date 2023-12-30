import { useState } from "react";
import SearchInput from "../SearchInput/SearchInput";
import EmptyBookmarkIcon from "/assets/icon-bookmark-empty.svg";
import BookmarkIcon from "/assets/icon-bookmark-full.svg";
import PropTypes from "prop-types";

TVTab.propTypes = {
  mediaItems: PropTypes.array,
  setMediaItems: PropTypes.func,
};

export default function TVTab({ mediaItems, setMediaItems }) {
  const [searchTerm, setSearchTerm] = useState("");
  const shows = mediaItems.filter(item => item.category === "TV Series");

  const filteredSeries = shows.filter(show => {
    if (searchTerm === "") return show;
    else return show.title.toLowerCase().includes(searchTerm);
  });

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
      <SearchInput
        placeholder="Search for TV series"
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <section className="series-list">
        {searchTerm === "" ? (
          <h2>TV Series</h2>
        ) : (
          <h2>
            {`Found ${filteredSeries.length} ${
              filteredSeries.length === 1 ? "result" : "results"
            } for '${searchTerm}'`}
          </h2>
        )}
        <ul>
          {filteredSeries.map(item => {
            return (
              <div key={item.title} className="series">
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
      </section>
    </>
  );
}
