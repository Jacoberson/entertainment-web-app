import { useState } from "react";
import data from "./data.json";
import Navbar from "./components/Navbar/Navbar";
import SearchInput from "./components/SearchInput/SearchInput";
import TrendingSection from "./components/TrendingSection/TrendingSection";
import RecommendedSection from "./components/RecommendedSection/RecommendedSection";
import MoviesTab from "./components/MoviesTab/MoviesTab";
import BookmarkTab from "./components/BookmarkTab/BookmarkTab";
import "./App.scss";
import TVTab from "./components/TVTab/TVTab";

function App() {
  const [selectedNavItem, setSelectedNavItem] = useState("home");
  const [mediaItems, setMediaItems] = useState(data);

  return (
    <>
      <Navbar
        selectedNavItem={selectedNavItem}
        setSelectedNavItem={setSelectedNavItem}
      />
      <main>
        {selectedNavItem === "home" && (
          <>
            <SearchInput placeholder="Search for movies or TV series" />
            <TrendingSection
              mediaItems={mediaItems}
              setMediaItems={setMediaItems}
            />
            <RecommendedSection
              mediaItems={mediaItems}
              setMediaItems={setMediaItems}
            />
          </>
        )}
        {selectedNavItem === "movies" && (
          <>
            <SearchInput placeholder="Search for movies" />
            <MoviesTab mediaItems={mediaItems} setMediaItems={setMediaItems} />
          </>
        )}
        {selectedNavItem === "tv" && (
          <>
            <SearchInput placeholder="Search for TV series" />
            <TVTab mediaItems={mediaItems} setMediaItems={setMediaItems} />
          </>
        )}
        {selectedNavItem === "bookmarks" && (
          <>
            <SearchInput placeholder="Search for bookmarked shows or movies" />
            <BookmarkTab
              mediaItems={mediaItems}
              setMediaItems={setMediaItems}
            />
          </>
        )}
      </main>
    </>
  );
}

export default App;
