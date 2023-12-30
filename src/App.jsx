import { useState } from "react";
import data from "./data.json";
import Navbar from "./components/Navbar/Navbar";
import HomeTab from "./components/HomeTab/HomeTab";
import MoviesTab from "./components/MoviesTab/MoviesTab";
import TVTab from "./components/TVTab/TVTab";
import BookmarkTab from "./components/BookmarkTab/BookmarkTab";
import "./App.scss";

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
            <HomeTab mediaItems={mediaItems} setMediaItems={setMediaItems} />
          </>
        )}
        {selectedNavItem === "movies" && (
          <>
            <MoviesTab mediaItems={mediaItems} setMediaItems={setMediaItems} />
          </>
        )}
        {selectedNavItem === "tv" && (
          <>
            <TVTab mediaItems={mediaItems} setMediaItems={setMediaItems} />
          </>
        )}
        {selectedNavItem === "bookmarks" && (
          <>
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
