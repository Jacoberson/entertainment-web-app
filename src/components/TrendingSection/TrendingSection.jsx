import data from "../../data.json";
import BookmarkIcon from "../../assets/icon-bookmark-empty.svg";
import MovieIcon from "../../assets/icon-category-movie.svg";
import TVIcon from "../../assets/icon-category-tv.svg";

export default function TrendingSection() {
  return (
    <section className="trending-section">
      <h2>Trending</h2>
      <ul>
        {data
          .filter(val => val.isTrending === true)
          .map(item => {
            return (
              <div key={item.title} className="trending-item">
                <li>
                  <img className="bookmark" src={BookmarkIcon} alt="" />
                  <img
                    src={item.thumbnail.trending.small}
                    alt={`thumbnail for ${item.title}`}
                  />
                </li>
                <div className="text">
                  <div className="info-container">
                    <p>
                      <span>{item.year}</span>
                      <span>&bull;</span>
                      <span>
                        <img
                          className="category-image"
                          src={item.category === "Movie" ? MovieIcon : TVIcon}
                          alt={item.category}
                        />{" "}
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
