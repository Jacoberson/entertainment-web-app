import { useState } from "react";
import SearchInput from "../SearchInput/SearchInput";
import EmptyBookmarkIcon from "/assets/icon-bookmark-empty.svg";
import BookmarkIcon from "/assets/icon-bookmark-full.svg";
import PropTypes from "prop-types";

MoviesTab.propTypes = {
  mediaItems: PropTypes.array,
  setMediaItems: PropTypes.func,
};

export default function MoviesTab({ mediaItems, setMediaItems }) {
  const [searchTerm, setSearchTerm] = useState("");
  const movies = mediaItems.filter(item => item.category === "Movie");

  const filteredMovies = movies.filter(movie => {
    if (searchTerm === "") return movie;
    else return movie.title.toLowerCase().includes(searchTerm);
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
        placeholder="Search for movies"
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <section className="movie-list">
        {searchTerm === "" ? (
          <h2>Movies</h2>
        ) : (
          <h2>
            {`Found ${filteredMovies.length} 
                        ${
                          filteredMovies.length === 1 ? "result" : "results"
                        } for '${searchTerm}'`}
          </h2>
        )}
        <ul>
          {filteredMovies.map(item => {
            return (
              <div key={item.title} className="movie">
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
      </section>
    </>
  );
}
