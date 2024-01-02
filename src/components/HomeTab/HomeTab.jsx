import { useState } from "react";
import EmptyBookmarkIcon from "/assets/icon-bookmark-empty.svg";
import BookmarkIcon from "/assets/icon-bookmark-full.svg";
import SearchInput from "../SearchInput/SearchInput";
import TrendingSection from "../TrendingSection/TrendingSection";
import RecommendedSection from "../RecommendedSection/RecommendedSection";
import PropTypes from "prop-types";

HomeTab.propTypes = {
  mediaItems: PropTypes.array,
  setMediaItems: PropTypes.func,
};

export default function HomeTab({ mediaItems, setMediaItems }) {
  const [searchTerm, setSearchTerm] = useState("");
  const recommendedItems = mediaItems.filter(item => item.isTrending !== true);

  const filteredData = mediaItems.filter(item => {
    if (searchTerm === "") return item;
    else return item.title.toLowerCase().includes(searchTerm);
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
        placeholder="Search for movies or TV series"
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      {searchTerm === "" ? (
        <>
          <TrendingSection
            mediaItems={mediaItems}
            setMediaItems={setMediaItems}
          />
          <RecommendedSection
            mediaItems={mediaItems}
            setMediaItems={setMediaItems}
            recommendedItems={recommendedItems}
            searchTerm={searchTerm}
          />
        </>
      ) : (
        <>
          <section className="search-results">
            <h2>
              {`Found ${filteredData.length} ${
                filteredData.length === 1 ? "result" : "results"
              } for '${searchTerm}'`}
            </h2>
            <ul>
              {filteredData.map(item => {
                return (
                  <div key={item.title} className="searched-item">
                    <li>
                      <button className="play-button">Play</button>
                      <img
                        className="bookmark"
                        src={
                          item.isBookmarked ? BookmarkIcon : EmptyBookmarkIcon
                        }
                        alt="bookmark icon"
                        onClick={() =>
                          handleBookmarking(item, item.isBookmarked)
                        }
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
      )}
    </>
  );
}
