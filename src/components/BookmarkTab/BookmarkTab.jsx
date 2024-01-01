import { useState } from "react";
import SearchInput from "../SearchInput/SearchInput";
import BookmarkIcon from "/assets/icon-bookmark-full.svg";
import PropTypes from "prop-types";

BookmarkTab.propTypes = {
  mediaItems: PropTypes.array,
  setMediaItems: PropTypes.func,
};

export default function BookmarkTab({ mediaItems, setMediaItems }) {
  const [searchTerm, setSearchTerm] = useState("");
  const bookmarkedMovies = mediaItems.filter(
    item => item.category === "Movie" && item.isBookmarked
  );
  const bookmarkedSeries = mediaItems.filter(
    item => item.category === "TV Series" && item.isBookmarked
  );

  const filteredMoviesAndShows = bookmarkedMovies
    .concat(bookmarkedSeries)
    .filter(item => {
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
        placeholder="Search for bookmarked shows"
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <section className="bookmark-list">
        {searchTerm === "" ? (
          <>
            <div className="bookmarked-movies">
              <h2>Bookmarked Movies</h2>
              <ul>
                {bookmarkedMovies.map(movie => {
                  return (
                    <div key={movie.title} className="movie">
                      <li>
                        <img
                          className="bookmark"
                          src={BookmarkIcon}
                          alt="bookmark icon"
                          onClick={() =>
                            handleBookmarking(movie, movie.isBookmarked)
                          }
                        />
                        <picture>
                          <source
                            media="(max-width: 767px)"
                            srcSet={movie.thumbnail.regular.small}
                          />
                          <source
                            media="(max-width: 1024px)"
                            srcSet={movie.thumbnail.regular.medium}
                          />
                          <img
                            src={movie.thumbnail.regular.large}
                            alt={`thumbnail for ${movie.title}`}
                          />
                        </picture>
                      </li>
                      <div className="text">
                        <div className="info-container">
                          <p>
                            <span>{movie.year}</span>
                            <span>&bull;</span>
                            <span className="category movie">
                              {movie.category}
                            </span>
                            <span>&bull;</span>
                            <span>{movie.rating}</span>
                          </p>
                        </div>
                        <div className="title-container">
                          <h4 className="title">{movie.title}</h4>
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
                {bookmarkedSeries.map(series => {
                  return (
                    <div key={series.title} className="tv-series">
                      <li>
                        <img
                          className="bookmark"
                          src={BookmarkIcon}
                          alt="bookmark icon"
                          onClick={() =>
                            handleBookmarking(series, series.isBookmarked)
                          }
                        />
                        <picture>
                          <source
                            media="(max-width: 767px)"
                            srcSet={series.thumbnail.regular.small}
                          />
                          <source
                            media="(max-width: 1024px)"
                            srcSet={series.thumbnail.regular.medium}
                          />
                          <img
                            src={series.thumbnail.regular.large}
                            alt={`thumbnail for ${series.title}`}
                          />
                        </picture>
                      </li>
                      <div className="text">
                        <div className="info-container">
                          <p>
                            <span>{series.year}</span>
                            <span>&bull;</span>
                            <span className="category tv-series">
                              {series.category}
                            </span>
                            <span>&bull;</span>
                            <span>{series.rating}</span>
                          </p>
                        </div>
                        <div className="title-container">
                          <h4 className="title">{series.title}</h4>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </ul>
            </div>
          </>
        ) : (
          <>
            <div className="bookmarked-shows">
              <h2>{`Found ${filteredMoviesAndShows.length} ${
                filteredMoviesAndShows.length === 1 ? "result" : "results"
              } for '${searchTerm}'`}</h2>
            </div>
            <ul>
              {filteredMoviesAndShows.map(item => {
                return (
                  <div key={item.title} className="bookmarked-show">
                    <li>
                      <img
                        className="bookmark"
                        src={BookmarkIcon}
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
          </>
        )}
      </section>
    </>
  );
}
