import data from "../../data.json";
import BookmarkIcon from "/assets/icon-bookmark-empty.svg";

export default function TVTab() {
  return (
    <section className="series-list">
      <h2>TV Series</h2>
      <ul>
        {data
          .filter(val => val.category === "TV Series")
          .map(item => {
            return (
              <div key={item.title} className="series">
                <li>
                  <img
                    className="bookmark"
                    src={BookmarkIcon}
                    alt="bookmark icon"
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
  );
}
