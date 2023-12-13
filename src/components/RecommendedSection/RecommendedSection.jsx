import data from "../../data.json";
import BookmarkIcon from "/assets/icon-bookmark-empty.svg";

export default function TrendingSection() {
  return (
    <section className="recommended-section">
      <h2>Recommended for you</h2>
      <ul>
        {data
          .filter(val => val.isTrending !== true)
          .map(item => {
            return (
              <div key={item.title} className="recommended-item">
                <li>
                  <img className="bookmark" src={BookmarkIcon} alt="" />
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
                          .replace(" ", "-")}`}>
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
